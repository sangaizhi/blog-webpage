<template>
	<div class="breadcrumb_nav">
		<span v-for="(item,index) in breadlist">
                <router-link :to="item.path">{{item.name}}</router-link>
        </span>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.getBreadcrumb(true); //刷新的参数为true
		},
		data() {
			return {
				breadlist: '' // 路由集合
			}
		},
		methods: {
			getBreadcrumb(isreload) {
				//面包屑位置索引放到meta里预设好，首页索引为0，一级默认为1
				var breadNumber = typeof(this.$route.meta.breadNumber) != "undefined" ? this.$route.meta.breadNumber : 1;
				//目前breadlist集合数组个数
				var breadLength = this.$store.state.breadListState.length;
				var curName = this.$route.name;
				var curPath = this.$route.fullPath;
				var newBread = {
					name: curName,
					path: curPath
				};
				//              this.$store.commit('increment');
				if(breadNumber === 0 || breadNumber === 1) { //点击首页或者一级
					this.$store.commit('breadListStateRemove', 1); //初始化，只有首页面包屑按钮
					if(breadNumber === 1) { //点击一级菜单
						this.$store.commit('breadListStateAdd', newBread); //当前页面添加到breadlist集合
					}
				} else {
					if(!isreload) {
						if(breadLength <= breadNumber) { //breadlist集合个数等于或者小于目前层级breadNumber
							this.$store.commit('breadListStateAdd', newBread); //要把当前路由添加到breadlist集合
						} else {
							this.$store.commit('breadListStateRemove', parseInt(breadNumber) + 1); //如果往回点面包屑导航，截取；
						}
					} else {
						//刷新，state.breadListState被初始化，从缓存取值；
						this.$store.state.breadListState = JSON.parse(sessionStorage.getItem('breadListStorage'));
					}
				}
				this.breadlist = this.$store.state.breadListState;
				sessionStorage.setItem('breadListStorage', JSON.stringify(this.breadlist))
			}
		},
		watch: {
			$route() {
				this.getBreadcrumb();
			}
		},
	}
</script>

<style>
	.breadcrumb_nav {
		display: block;
		height: 50px;
		line-height: 50px;
		margin: 60px 20px 10px 220px;
		background: #FFFFFF;
		text-align: left;
	}
	
	.breadcrumb_nav span {
		display: inline-block;
		line-height: 50px;
		font-size: 14px;
	}
	
	.breadcrumb_nav span:before {
		padding: 0 5px;
		color: #ccc;
		content: "/\00a0";
	}
	.breadcrumb_nav span:first-child:before {
		content: "";
	}
</style>