import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../router'
import qs from 'qs';

// axios 配置


// http request 拦截器
axios.interceptors.request.use(
	config => {
		config.data = JSON.stringify(config.data);
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		if(store.state.token) {
			config.headers.Authorization = `token ${store.state.token}`;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	});

// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if(error.response) {
			switch(error.response.status) {
				case 401:
					// 401 清除token信息并跳转到登录页面
					store.commit(types.LOGOUT);
					router.replace({
						path: 'login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					})
			}
		}
		return Promise.reject(error.response.data)
	});


var axiosInstance = axios.create({
	baseURL: 'https://localhost:8081/blog-portal-manager',
	timeout: 100000,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	transformRequest: [function(data) {
		data = qs.stringify(data)
		return data;
	}]
});


export default axiosInstance;

export function fetch(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(response => {
			resolve(response.data);
		}).catch(err => {
			reject(err)
		});

	});
}

export function post(url, data = {}) {
	return new Promise((resolve, reject) => {
			axios.post(url, data)
				.then(response => {
					resolve(response.data);
				}, err => {
					reject(err)
				});

	});
}

export function patch(url, data = {}) {
	return new Promise((resolve, reject) => {
			axios.patch(url, data)
				.then(response => {
					resolve(response.data);
				}, err => {
					reject(err)
				});
	});
}

export function put(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.put(url, data)
			.then(response => {
				resolve(response.data)
			}, err => {
				reject(err);
			})
	});
}