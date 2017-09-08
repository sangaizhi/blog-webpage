<template>
	<el-row id='top-nav' class='top-nav'>
		<el-col :span="24" class='top-nav-col'>
			<div class="logo-text-container"> Z Blog</div>
			<div class='user-container'>
				<div class="user-avatar">
					<img width="30px" height="30px" v-bind:src="user.avatar" />
				</div>
				<div class="user-name" @click="userDownShow($event)">
					<span v-html="user.name"></span>
					<i class="el-icon-arrow-down"></i>
					<section class='user-down' style="display: none;">
						<p>
							<a @click="logout($event)">退出</a>
						</p>
					</section>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</el-col>
	</el-row>
</template>
<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				user: {
					avatar: '',
					name: ''
				}
			};
		},
		mounted() {
			var user = JSON.parse(window.localStorage.getItem("user"));
			this.user.name = user.name;
			this.user.avatar = user.avatar;
		},
		methods: {
			userDownShow: function(event) {
				if($('.user-down').is(":hidden")) {
					$('.user-down').slideDown();
				} else {
					$('.user-down').slideUp();
				}
			}
		}
	}
</script>
<style>
	.top-nav {
		height: 50px;
		line-height: 50px;
		margin: 0;
		border-bottom: 1px solid #EFF2F7;
		box-sizing: border-box;
	}
	
	.top-nav .top-nav-col {
		/*border-bottom: ;*/
	}
	
	.top-nav div:not(.clear):not(.hide) {
		display: inline-block;
		height: 50px;
		line-height: 50px;
	}
	
	.logo-text-container {
		width: 200px;
		text-align: center;
		font-size: 20px;
		background: #13CE66;
	}
	
	.user-container {
		height: 48px !important;
		float: right;
	}
	
	.user-container .user-avatar {
		display: inline-block;
		height: 50px;
		width: 50px;
	}
	
	.user-container .user-avatar img {
		width: 30px;
		height: 30px;
		margin: 10px;
	}
	
	.user-container .user-name {
		width: 100px;
		height: 50px;
		line-height: 50px;
		top: -21px;
		position: relative;
		font-size: 14px;
		cursor: pointer;
		text-align: center;
	}
	
	.user-container .user-name i {
		font-size: 12px;
	}
	
	.user-down {
		position: absolute;
		width: 100px;
		text-align: center;
	}
</style>