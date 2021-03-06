/**
 * Created by superman on 17/2/16.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import * as types from './store/types';
import axiosInstance from './util/http';

import App from './App.vue';
import leftNav from './components/navigation/leftNav.vue';
import container from './components/container.vue';
import login from './components/user/login.vue';
import articleList from './components/article/articleList.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: '/',
		components:{
			other:articleList
		},
		meta: {
			requireAuth: false
		},
	},
	{
		path: '/login',
		name: '登录',
		component: login
	},
	{
		path: '/articleList/:categoryId',
		name: ':name',
		component:articleList,
		meta: {
			requireAuth: false,
			breadNumber: 1
		},
	}
];

// 页面刷新时，重新赋值token
if(window.localStorage.getItem('token')) {
	store.commit(types.LOGIN, window.localStorage.getItem('token'));
}

const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next) => {
	if(to.matched.some(r => r.meta.requireAuth)) {
		if(store.state.token) {
			// 判断登录是否过期，通过从后台获取用户的数据
			axiosInstance.post("http://localhost:8082/blog-sso/getUserByToken", {
				token: store.state.token
			}).then(function(response) {
				let result = response.data;
				var resultStatus = result.status;
				if(resultStatus) {
					window.localStorage.removeItem("userInfo");
					window.localStorage.setItem("userInfo", result.data);
					window.localStorage.setItem("userInfo.id", result.data.id);
					window.localStorage.setItem("userInfo.phone", result.data.phone);
					window.localStorage.setItem("userInfo.email", result.data.email);
					window.localStorage.setItem("userInfo.nickname", result.data.nickname);
					window.localStorage.setItem("userInfo.profile", result.data.profile);
					next();
				} else {
					alert("登录过期");
					next({
						path: '/login',
						query: {
							redirect: to.fullPath
						}
					});
				}
			}, function(response) {
				alert("登录过期");
				next({
					path: '/login',
					query: {
						redirect: to.fullPath
					}
				});
			});
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			});
		}
	} else {
		next();
	}
})

export default router;