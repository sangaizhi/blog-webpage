/**
 * Created by superman on 17/2/16.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store.js';
import * as types from '../store/types.js';
import login from '../page/login.vue';
import home from '../page/home.vue';
// import axiosInstance from '../util/http';

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'login',
		component: login,
		meta: {
			requireAuth: false,
		},
	},
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			requireAuth: false,
		},
	},
	{
		path: '/home',
		name: '/home',
		component: home,
		meta: {
			requireAuth: true,
		}
	}
];

// 页面刷新时，重新赋值token
if(window.localStorage.getItem('token')) {
	store.commit(types.LOGIN, window.localStorage.getItem('token'));
}

const router = new VueRouter({
	routes
});


// 路由拦截器，
router.beforeEach((to, from, next) => {
	if(to.matched.some(r => r.meta.requireAuth)) {
		console.log(store.state.token);
		if(store.state.token) {
			next();
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