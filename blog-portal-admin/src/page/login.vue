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
						<label class="">Z-Blog</label>
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
	import { saveUser, saveToken } from "../util/user.js";
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
						var user = {
							name: 'sangaizhi',
							avatar: 'https://avatars2.githubusercontent.com/u/17513528?v=4&s=460',
						};
//						saveToken("QWERTYUIOP");
						saveUser(user);
						self.token = "QWERTYUIOP";
						// 此操作会将token 保存待localStorage
					  self.$store.commit(types.LOGIN, self.token);
					  console.log(self.$store.state.token)
						let redirect = decodeURIComponent(self.$route.query.redirect || '/');
						self.$router.push({
							path: "/home"
						})
						//						userLogin(loginParam).then(data => {
						//							let response = data.data;
						//							let responseStatus = response.status;
						//							if(responseStatus) {
						//								// 登录成功
						//								// 保存用户信息
						//								// 保存 token 到本地
						//								self.token = result.data;
						//								self.$store.commit(types.LOGIN, self.token);
						//								// 重定向页面到登录之前的url
						//								let redirect = decodeURIComponent(self.$route.query.redirect || '/');
						//								self.$router.push({
						//									path: redirect
						//								})
						//							} else {
						//								//登录失败
						//								// 提示失败信息
						//								var errorMsg = response.msg;
						//								this.$message({
						//									showClose: true,
						//									message: errorMsg,
						//									type: 'error'
						//								});
						//							}
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
		margin: 50px 30px;
		display: inline-block;
		width: 66%;
	}
	
	.form-title {
		margin-bottom: 40px;
	}
	
	.form-title label {
		display: inline-block;
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
	}
	
	.el-form-item button {
		width: 100%;
	}
	
	.error-message {
		color: #FF4949;
	}
</style>