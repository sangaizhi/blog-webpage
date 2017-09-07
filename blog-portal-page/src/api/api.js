import axiosInstance from '../util/http.js';

let base = '/blog-admin';

let ssoUrl = "http://127.0.0.1:8082/blog-sso";

export const requestLogin = params => {
	return axiosInstance.post(`${ssoUrl}/login`, params).then(res => res.data);
};

export const getUserList = params => {
	return axiosInstance.get(`${base}/user/list`, {
		params: params
	});
};

export const getUserListPage = params => {
	return axiosInstance.get(`${base}/user/listpage`, {
		params: params
	});
};

export const removeUser = params => {
	return axiosInstance.get(`${base}/user/remove`, {
		params: params
	});
};

export const batchRemoveUser = params => {
	return axiosInstance.get(`${base}/user/batchremove`, {
		params: params
	});
};

export const editUser = params => {
	return axiosInstance.get(`${base}/user/edit`, {
		params: params
	});
};

export const addUser = params => {
	return axiosInstance.get(`${base}/user/add`, {
		params: params
	});
};

export const getUserByToken = params => {
	return axiosInstance.get(`${ssoUrl}/getUserByToken`, {params:params}).then(res => res.data);
};
	