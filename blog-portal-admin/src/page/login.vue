<template>
	<div>
		<el-row>
			<el-col :span="5" :offset="3">
				<div class="logo-container">
				</div>
			</el-col>
		</el-row>
		<el-row class='login-form-section'>
			<div class="login-form-container">
				<el-form :model="loginUser" action='/login'>
					<el-col :span="24" class='form-title'>
						<label class="">Z-Blsog</label>
					</el-col>
					<el-form-item>
						<el-input v-model="loginUser.account" v-validate="'required|loginUserAccount'" name='loginUserAccount'></el-input>
						<span v-show="errors.has('loginUserAccount')" class="text-style error-message" v-cloak> {{ errors.first('loginUserAccount') }} </span>
					</el-form-item>
					<el-form-item>
						<el-input v-model="loginUser.password" v-validate="'required'" type='password' name='loginUserPassword'></el-input>
						<span v-show="errors.has('loginUserPassword')" class="text-style error-message" v-cloak> {{ errors.first('loginUserPassword') }} </span>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="login">登录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-row>
	</div>
</template>
<script>
	import * as types from '../store/types';
	import { userLogin } from "../api/api.js";
	import { saveUser, saveToken, requestAndSaveUser } from "../util/storage.js";
	export default {
		data() {
			return {
				loginUser: {
					account: '',
					password: ''
				}
			}
		},
		methods: {
			login: function() {
				this.$validator.validateAll().then((result) => {
					if(result) {
						var self = this;
						var loginParam = this.loginUser;
						userLogin(loginParam).then(function(response) {
							let data = response.data;
							let status = response.status;
							if(status) {
								// 登录成功

								// 保存 token 到本地
								self.token = data;
								self.$store.commit(types.LOGIN, self.token);
								self.$cookie.set('token', data, {expires: '1h', domain:'localhost'});
								var tokenParam = {
									'token': self.token
								}
								// 请求用户信息
								requestAndSaveUser(tokenParam).then(function(resp) {
									var respStatus = resp.status;
									if(respStatus) {
										// 保存用户信息
										saveUser(resp.data);
										// 重定向页面到登录之前的url
										let redirect = decodeURIComponent(self.$route.query.redirect || '/');
										self.$router.push({
											path: "/home"
										})
									} else {
										var errorMsg = resp.msg;
										self.$message({
											showClose: true,
											message: errorMsg,
											type: 'error'
										});
									}
								}, function(response) {
									self.$message({
										showClose: true,
										message: "获取用户信息失败",
										type: 'error'
									});
								});
							} else {
								//登录失败
								// 提示失败信息
								var errorMsg = response.msg;
								self.$message({
									showClose: true,
									message: errorMsg,
									type: 'error'
								});
							}
						}, function() {
							self.$message({
								showClose: true,
								message: "登录失败",
								type: 'error'
							});
						});
					}
				});
			}
		}
	}
</script>
<style>
	html {}
	
	.logo-container {
		height: 50px;
		line-height: 50px;
		border: 1px solid #e00;
	}
	
	.login-form-section {
		background: url(../assets/images/login_bg.jpg);
	}
	
	.login-form-container {
		background: #FFFFFF;
		height: 400px;
		width: 400px;
		margin-left: calc(100% - 400px - 250px);
		margin-right: 250px;
		margin-top: 150px;
		margin-bottom: 150px;
		border-radius: 5px;
	}
	
	.login-form-container form {
		margin: 50px 17%;
		display: inline-block;
		width: 66%;
	}
	
	.form-title {
		margin-bottom: 40px;
		text-align: center;
	}
	
	.form-title label {
		display: inline-block;
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
	}
	
	.login-form-container .el-form-item button {
		width: 100%;
	}
	
	.error-message {
		color: #FF4949;
	}
</style>