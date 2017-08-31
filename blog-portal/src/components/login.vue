<template>
	<div class="login-container">
		<div class="top-section container">
			<div class="top-body">
				<div class="left-body">
					<div class="logo-container">
						<p>
							<img src="../assets/images/logo.png" height="80px" />
						</p>
					</div>
					<p class="blog-name">
						<label>Eric の  Blog</label>
					</p>
					<div class="login-body">
						<form id='login-form' class="login-form" @submit.stop.prevent="login">
							<p class="form-group">
								<input class="form-control" name="account" v-model.trim="account" v-model="account" type="text" placeholder="邮箱/手机" />
							</p>
							<p class="form-group">
								<input class="form-control" type="password" v-model="password" placeholder="密码" />
							</p>
							<p class="form-group error-group" v-if="hasError">
								<label class="error" v-html="errorMessage"></label>

							</p>
							<p class="form-group">
								<span>
									<input type="checkbox" class="form-control" value="1" id="remember"/>
									<label for="remember">记住我</label>
								</span>
								<span>
									<button type="submit">登录</button>
								</span>
							</p>
						</form>
					</div>
				</div>
				<div class="right-body"></div>
			</div>
			<div class="top-fotter">
				<p class="quick-link">
					<router-link to="/register">还没账号,去注册</router-link>
					<router-link to="/forgetPwd">忘记密码</router-link>
				</p>

			</div>
		</div>
		<div class="bottom-section container"></div>
	</div>
</template>

<script type="application/ecmascript">
	import * as types from '../store/types';
	import axiosInstance from '../util/http';
	export default {
		name: '',
		data() {
			return {
				loginUrl: 'http://localhost:8082/blog-sso/login',
				account: '',
				password: '',
				errorMessage: '',
				hasError: false,
				token: ''
			}
		},
		mounted() {
			this.$store.commit(types.TITLE, 'Login');
		},
		methods: {
			login() {
				var self = this;
				axiosInstance.post(this.loginUrl, {
					account: this.account,
					password: this.password
				}).then(function(response) {
					let result = response.data;
					var resultStatus = result.status;
					if(resultStatus) {
						axiosInstance.post("http://localhost:8082/blog-sso/getUserByToken", {
							token: result.data
						}).then(function(response) {
							let userInfo = response.data;
							var userInfoStatus = userInfo.status;
							if(userInfoStatus) {
								window.localStorage.removeItem("userInfo");
								window.localStorage.setItem("userInfo", userInfo.data);
								window.localStorage.setItem("userInfo.id", userInfo.data.id);
								window.localStorage.setItem("userInfo.phone", userInfo.data.phone);
								window.localStorage.setItem("userInfo.email", userInfo.data.email);
								window.localStorage.setItem("userInfo.nickname", userInfo.data.nickname);
								window.localStorage.setItem("userInfo.profile", userInfo.data.profile);
								
								self.token = result.data;
								window.localStorage.setItem("token", self.token);
								self.$store.commit(types.LOGIN, self.token)
								let redirect = decodeURIComponent(self.$route.query.redirect || '/');
								self.$router.push({
									path: redirect
								})
							} else {
								alert("获取用户信息失败");
							}
						}, function(response) {
							alert("获取用户信息失败");
						});
					} else {
						self.errorMessage = result.msg;
						self.hasError = true;

					}
				}, function(response) {
					self.hasError = true;
					self.errorMessage = "登录失败!";
				});
			}
		}
	}

	function getUserInfo(_token) {

	}
</script>

<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
	#app {
		margin-top: 0 !important;
	}
	
	.login-container {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-image: url(../assets/images/login_bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	.container {
		position: absolute;
		left: 0;
		right: 0;
		width: 100%;
	}
	
	.top-section {
		top: 0;
		height: 70%;
	}
	
	.bottom-section {
		bottom: 0;
		height: 30%;
	}
	
	.top-body {
		width: 750px;
		height: 450px;
		margin: 100px auto 0 auto;
		padding: 50px 60px;
		background: #FFFFFF;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	
	.top-body .left-body {
		width: 450px;
		height: 450px;
		float: left;
		display: inline-block;
		box-sizing: border-box;
		border-right: 1px solid #E6E6E6;
	}
	
	.top-body .right-body {
		width: 300px;
		height: 450px;
		float: right;
		display: inline-block;
		box-sizing: border-box;
	}
	
	.top-body .left-body .login-container {
		height: 100px;
		width: 300px;
	}
	
	.top-body .left-body .logo-container p {}
	
	.top-body .left-body .logo-container p img {
		margin: 0 155px 0 95px;
		display: inline-block;
	}
	
	.top-body .left-body .blog-name {
		font-size: 16px;
		display: inline-block;
		width: 100px;
		margin: 0 205px 0 145px;
	}
	
	.top-body .left-body .login-body {}
	
	.top-body .left-body .login-body .login-form {
		margin-top: 50px;
	}
	
	.top-body .left-body .login-body .login-form .form-group {
		height: 50px;
		line-height: 50px;
		width: 280px;
		margin: 0 115px 0 55px;
		margin-bottom: 20px;
	}
	
	.top-body .left-body .login-body .login-form .form-group input {
		width: 250px;
		height: 40px;
		line-height: 30px;
		border: 1px solid #e6e6e6;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 5px;
	}
	
	.top-body .left-body .login-body .login-form .form-group input:focus {
		border: 1px solid #499ef3;
	}
	
	.top-body .left-body .login-body .login-form .form-group input::-webkit-input-placeholder {
		color: #58666E;
	}
	
	.top-body .left-body .login-body .login-form .form-group input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18*/
		color: #58666E;
	}
	
	.top-body .left-body .login-body .login-form .form-group input::-moz-placeholder {
		/* Mozilla Firefox 19+*/
		color: #58666E;
	}
	
	.top-body .left-body .login-body .login-form .form-group input:-ms-input-placeholder {
		/* Internet Explorer 10+*/
		color: #58666E;
	}
	
	.top-body .left-body .login-body .login-form .form-group span:first-child {
		float: left;
	}
	
	.top-body .left-body .login-body .login-form .form-group span:last-child {
		float: right;
	}
	
	.top-body .left-body .login-body .login-form span #remember {
		width: 15px;
		height: 15px;
	}
	
	.top-body .left-body .login-body .login-form span button {
		width: 120px;
		height: 40px;
		border: 1px solid #e6e6e6;
		background: #59b0ff;
		color: #fff;
		font-size: 16px;
	}
	
	.top-fotter {
		width: 750px;
		height: 60px;
		margin: 0 auto;
		padding: 0 60px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		background: #E6E6E6;
		line-height: 60px;
	}
	
	.top-fotter .quick-link {
		text-align: left;
		margin: 0;
	}
	
	.top-fotter .quick-link a {
		margin: 0 10px;
		cursor: pointer;
	}
	
	.error {
		display: inline-block;
		width: 200px;
		height: 30px;
		background: #e21f1d;
		margin: 10px 0;
		line-height: 30px;
		color: #FFF;
		border-radius: 5px;
	}
</style>