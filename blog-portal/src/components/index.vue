<template>
	<div>
		<header id="header" class="app-header navbar" role="menu">
			<!-- navbar header（交集处） -->
			<div class="navbar-header">
				<!-- brand -->
				<a href="https://www.baidu.com" class="navbar-brand text-lt">
					<i class="fa  fa-home"></i>
					<span class="hidden-folded m-l-xs">Eric の  Blog</span>
				</a>
				<!-- / brand -->
			</div>
			<!-- / navbar header -->
			<!-- navbar collapse（顶部导航栏） -->
			<div class="top-nav">
				<!-- buttons -->
				<div class="nav navbar-nav hidden-xs">
					<a data-no-instant="" href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">
						<i class="fa fa-dedent"></i>
						<i class="fa fa-iddedent hide"></i>
					</a>
					<a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="show" target="#aside-user">
						<i class="fa fa-user-o"></i>
					</a>
				</div>
				<!-- / buttons -->

				<!-- search form -->
				<div id="searchform" class="navbar-form navbar-form-sm navbar-left shift" method="get" role="search">
					<div class="form-group">
						<div class="input-group">
							<!--TODO:键盘回车变成ajax提交，instantclick.js bug，暂时无法处理-->
							<input data-instant="" id="keyword" type="search" name="s" class="form-control input-sm bg-light no-border rounded padder" required="" placeholder="输入关键词搜索…" onkeypress="$.getKey();">
							<span class="input-group-btn">
			                	<a data-instant="" id="soux" href="" class="btn btn-sm bg-light rounded">
			                		<i class="fa fa-search"></i></icon>
			                	</a>
              				</span>
						</div>
					</div>
				</div>
				<!-- / search form -->

				<!-- 右側菜單 -->
				<div class="right-menu" id="right-menu" v-if="isLogin">
					<ul>
						<li>
							<i class="fa fa-star-o"></i>
							<span v-if="envelopeCount > 0">{{envelopeCount}}</span>
						</li>
						<li>
							<i class="fa fa-bell-o"></i>
							<span v-if="messageCount > 0">{{messageCount}}</span>
						</li>
						<li>
							<i class="fa fa-pencil"></i>
						</li>
					</ul>
				</div>
				<!-- / 右側菜單 -->

				<!-- 用户信息，显示信息 -->
				<div id="user-info" v-if="isLogin">
					<div class="user-info-sh">
						<div class="user-profile">
							<img width="30px" height="30px" v-bind:src="user.profile" />
						</div>
						<div class="user-name">
							<span v-html="user.nickname"></span>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
				</div>
				<!-- / 用户信息，显示信息-->
				<div id="login-menu" class="login-menu" v-else="">
					<div id="login-btn">
						<router-link to="/login">登录</router-link>
					</div>
				</div>

			</div>
			<!-- / navbar collapse -->
		</header>
		<nav class="left-nav" id="left-nav">
			<div class="recommendation-list left-list">
				<p class="list-title"><i class='list-title-icon recommendation'></i><span>推荐</span></p>
				<ul>
					<li v-for="recommendation in recommendationList">
						<router-link to="">{{recommendation.title}}</router-link>
					</li>
				</ul>
			</div>
			<div class="category-list left-list">
				<p class="list-title"><i class='list-title-icon category'></i><span>分类</span></p>
				<ul>
					<li v-for="category in categoryList">
						<router-link to="">{{category.name}}</router-link>
					</li>
				</ul>
			</div>
			<div class="category-list left-list">
				<p class="list-title"><i class='list-title-icon hot'></i><span>热门</span></p>
				<ul>
					<li v-for="hot in hotList">
						<router-link to="">{{hot.title}}</router-link>
					</li>
				</ul>
			</div>
		</nav>
		<div class="main" id="main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isLogin: false,
				isCollapse: true,
				envelopeCount: 2,
				messageCount: 1,
				user: {
					profile: '',
					nickname: ''
				},
				recommendationList: [{
						id: "1",
						title: '第一篇推荐'
					},
					{
						id: '2',
						title: '第二篇推荐'
					},
					{
						id: '3',
						title: '第三篇推荐'
					},
					{
						id: '4',
						title: '第四篇推荐'
					},
					{
						id: '5',
						title: '第五篇推荐'
					},
				],
				categoryList: [{
						id: '1',
						name: 'JAVA'
					},
					{
						id: '2',
						name: 'Spring'
					},
					{
						id: '3',
						name: 'Spring boot'
					},
					{
						id: '4',
						name: 'Spring Clound'
					},
					{
						id: '5',
						name: 'Mybatis'
					}
				],
				hotList: [{
						id: "1",
						title: '第一篇热门'
					},
					{
						id: '2',
						title: '第二篇热门'
					},
					{
						id: '3',
						title: '第三篇热门'
					},
					{
						id: '4',
						title: '第四篇热门'
					},
					{
						id: '5',
						title: '第五篇热门'
					},
				]
			};
		},
		mounted() {
			var token = window.localStorage.getItem("token");
			if(null != token && token != 'undefined') {
				var userInfo = window.localStorage.getItem("userInfo");
				this.user.nickname = window.localStorage.getItem("userInfo.nickname");
				this.user.profile = window.localStorage.getItem("userInfo.profile")
				this.isLogin = true;
			}

		},
		methods: {
			handleOpen(key, keyPath) {
			},
			handleClose(key, keyPath) {
			}
		}
	}
</script>

<style>
	#header {
		position: fixed;
		top: 0;
		width: 100%;
		height: 50px;
		left: 0;
		border-bottom: 1px solid #EDF1F2;
		-moz-box-shadow: 0px 1px 1px #EDF1F2;
		/* 老的 Firefox */
		box-shadow: 0px 1px 1px #EDF1F2;
		background: #FFFFFF;
	}
	
	.navbar-header {
		width: 200px;
		display: inline-block;
		left: 0;
		height: 50px;
		text-align: center;
		position: absolute;
		left: 0;
		line-height: 50px;
		background: #ff4200;
	}
	
	.navbar-header a {
		height: 30px;
		line-height: 30px;
		display: inline-block;
	}
	
	.navbar-header i {
		font-size: 22px;
		color: #FFFFFF;
	}
	
	.navbar-header span {
		font-size: 18px;
		font-weight: bold;
		color: #FFFFFF;
		margin-left: 10px;
	}
	
	.top-nav {
		border-bottom: rgb(88, 102, 110);
		color: rgb(88, 102, 110);
		height: 50px;
		position: absolute;
		left: 200px;
		width: 100%;
		width: -moz-calc(100% - 201px);
		width: -webkit-calc(100% - 201px);
		width: calc(100% - 201px);
	}
	
	.top-nav .navbar-nav {
		width: 100px;
		height: 50px;
		float: left;
		line-height: 50px;
		display: inline-block;
	}
	
	.top-nav .navbar-nav a {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		margin: 10px auto;
	}
	
	.top-nav .navbar-nav a i {
		font-size: 16px;
		color: #58666E;
		margin-right: 15px;
	}
	
	.top-nav #searchform {
		display: inline-block;
		height: 50px;
		line-height: 50px;
		float: left;
	}
	
	.top-nav #searchform .form-group {
		height: 30px;
		line-height: 30px;
		margin: 10px auto;
	}
	
	.top-nav #searchform .form-group .input-group {}
	
	.top-nav #searchform .form-group .input-group input {
		height: 30px;
		line-height: 30px;
		background: #edf1f2;
		color: #58666E;
		border: #edf1f2;
		border-top-left-radius: 500px;
		border-bottom-left-radius: 500px;
		padding-left: 15px;
		float: left;
	}
	
	.top-nav #searchform .form-group .input-group input::-webkit-input-placeholder {
		color: #58666E;
	}
	
	.top-nav #searchform .form-group .input-group input:-moz-placeholder {
		/* Mozilla Firefox 4 to 18*/
		color: #58666E;
	}
	
	.top-nav #searchform .form-group .input-group input::-moz-placeholder {
		/* Mozilla Firefox 19+*/
		color: #58666E;
	}
	
	.top-nav #searchform .form-group .input-group input:-ms-input-placeholder {
		/* Internet Explorer 10+*/
		color: #58666E;
	}
	
	.top-nav #searchform .form-group .input-group input:focus {
		border: #edf1f2;
		border-top-left-radius: 500px;
		border-bottom-left-radius: 500px;
		outline: none;
	}
	
	.top-nav #searchform .form-group .input-group .input-group-btn {
		display: inline-block;
		border: #edf1f2;
		border-bottom-right-radius: 500px;
		border-top-right-radius: 500px;
		background: #edf1f2;
		width: 33px;
		margin-left: -3px;
		float: left;
	}
	
	.top-nav #searchform .form-group .input-group .input-group-btn i {
		color: #58666E;
		font-size: 14px;
	}
	
	#right-menu {
		float: right;
		margin-right: 150px;
	}
	
	#right-menu ul {
		margin: 0;
		list-style: none;
	}
	
	#right-menu ul li {
		display: inline-block;
		float: left;
		position: relative;
		color: #58666E;
		margin: 0;
	}
	
	#right-menu ul li i {
		height: 30px;
		width: 30px;
		margin: 10px;
		color: inherit;
		line-height: 30px;
		font-size: 16px;
	}
	
	#right-menu ul li:hover {
		color: #13CE66;
		background: #58666E;
	}
	
	#right-menu ul li span {
		position: absolute;
		top: 10px;
		right: 10px;
		background: #FF6C60;
		height: 15px;
		width: 15px;
		font-size: 12px;
		color: #FFFFFF;
		line-height: 16px;
	}
	
	#user-info {
		width: 150px;
		float: right;
		margin-right: 0;
		right: 0;
		position: absolute;
		height: 50px;
	}
	
	#user-info .user-info-sh {}
	
	#user-info .user-info-sh .user-profile {
		position: relative;
		float: left;
		width: 46px;
		height: 50px;
		display: inline-block;
	}
	
	#user-info .user-info-sh .user-profile:hover {
		background: #58666E;
	}
	
	#user-info .user-info-sh .user-profile img {
		height: 30px;
		width: 30px;
		margin: 10px 8px;
	}
	
	#user-info .user-info-sh .user-name {
		width: 98px;
		height: 50px;
		line-height: 50px;
		display: inline-block;
		float: right;
		cursor: pointer;
	}
	
	#user-info .user-info-sh .user-name:hover {
		color: #13CE66;
		background: #58666E;
	}
	
	#login-menu {
		display: inline-block;
		float: right;
		height: 50px;
		width: 100px;
		line-height: 50px;
	}
	
	#login-menu:hover {
		color: #13CE66;
		background: #58666E;
	}
	
	#left-nav {
		position: absolute;
		width: 200px;
		height: -moz-calc(100% - 50px);
		height: -webkit-calc(100% - 50px);
		height: calc(100% - 50px);
		top: 50px;
		left: 0;
		background: #222222;
		color: #cccccc;
	}
	
	#left-nav .left-list {}
	
	#left-nav .left-list .list-title {
		display: block;
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		margin: 20px 0 0px 0;
		text-align: left;
		font-size: 12px;
		border-bottom: 1px solid #111111;
		box-sizing: border-box;
	}
	
	#left-nav .left-list .list-title:hover {
		color: #FFFFFF;
		background: #474747;
	}
	
	#left-nav .left-list .list-title .list-title-icon {
		width: 20px;
		height: 20px;
		display: inline-block;
		background-repeat: no-repeat;
		background-image: url(../assets/images/icon.png);
		margin: 10px 5px 0 0;
	}
	#left-nav .left-list .list-title span{
		display: inline-block;
		    position: relative;
    top: -7px;
	}
	
	#left-nav .left-list .list-title .list-title-icon.recommendation {
		background-position: 0px -1px;
	}
	
	#left-nav .left-list .list-title .list-title-icon.category {
		background-position: -19px -1px;
	}
	
	#left-nav .left-list .list-title .list-title-icon.hot {
		background-position: -37px -1px;
	}
	
	#left-nav .recommendation-list {}
	
	#left-nav .left-list ul {
		list-style: none;
		margin: 0;
	}
	
	#left-nav .left-list ul li {
		display: block;
		height: 30px;
		line-height: 30px;
		margin: 5px 0;
		padding-left: 40px;
		text-align: left;
		font-size: 14px;
	}
	
	#left-nav .left-list ul li a {
		color: inherit;
	}
	
	#left-nav .left-list ul li:hover {
		color: #FFFFFF;
		background: #474747;
	}
	
	#left-nav .left-list ul li a:hover {
		color: #FFFFFF;
	}
	#main{
		position: absolute;
		left: 200px;
		top:50px;
		height: -moz-calc(100% - 50px);
		height: -webkit-calc(100% - 50px);
		height: calc(100% - 50px);
		width: -moz-calc(100% - 200px);
		width: -webkit-calc(100% - 200px);
		width: calc(100% - 200px);
		
	}
</style>