import axiosInstance from '../util/http.js';

let base = '/blog-admin';

let ssoUrl = "http://127.0.0.1:8082/blog-sso";

export const userLogin = params => {
	return axiosInstance.post(`${ssoUrl}/login`, params).then(res => res.data);
};

