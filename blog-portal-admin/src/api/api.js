import axiosInstance from '../util/http.js';

let base = '/blog-admin';

let ssoUrl = "http://127.0.0.1:8082/blog-sso";

let domainUrl = "http://127.0.0.1:8083/blog-admin";

/**
 * 请求登录 
 */
export const userLogin = params => {
	return axiosInstance.post(`${ssoUrl}/admin/login`, params).then(res => res.data);
};

/**
 * 请求登出
 */
export const userLogout = params => {
	return axiosInstance.get(`${ssoUrl}/admin/logout`, {params:params}).then(res=>res.data);
}

/**
 * 通过token 获取用户信息 
 */
export const getUserByToken = params => {
	return axiosInstance.get(`${ssoUrl}/admin/getAdminByToken`, {params:params}).then(res => res.data);
};
	
/**
 * 请求获取分类列表 
 */
export const requestCategoryList = params =>{
	return axiosInstance.get(`${domainUrl}/category/list`,{params:params}).then(res => res.data);
}

/**
 * 删除分类
 */
 export const deletrCategory = params =>{
 	return axiosInstance.delete(`${domainUrl}/category/delete/${params}`,{params:params}).then(res => res.data);
 }
 
 /**
  * 新增分类
  */
 export const addCategory = params => {
 	return axiosInstance.post(`${domainUrl}/category/add`, params).then(res => res.data);
 }

/**
 * 获取分类信息
 */
export const getCategoryById = params => {
	return axiosInstance.get(`${domainUrl}/category/getById/${params}`,{}).then(res => res.data);
}

/**
 * 修改分类信息
 */
export const editCategory = params => {
	return axiosInstance.post(`${domainUrl}/category/edit`, params).then(res => res.data);
}

/**
 * 请求博文列表
 */
export const requestArticleList = params => {
	return axiosInstance.get(`${domainUrl}/article/list`,{params:params}).then(res => res.data);
}

/**
 * 新增博文
 */
export const addArticle = params => {
	return axiosInstance.post(`${domainUrl}/article/add`, params).then(res => res.data);
}

/**
 * 通過 Id 获取详细信息
 */
export const getArticleById = params =>{
	return axiosInstance.get(`${domainUrl}/article/getById/${params}`,{}).then(res => res.data);
}

/**
 * 刪除博文
 */
export const deleteArticle = params => {
	return axiosInstance.get(`${domainUrl}/article/delete/${params}`,{}).then(res => res.data);
}

/**
 * 刪除博文标签
 */
export const deleteArticleLabel = params =>{
	return axiosInstance.post(`${domainUrl}/article/deleteLabel`, params).then(res => res.data);
}

/**
 * 获取用户列表
 */
export const requestUserList = params => {
	return axiosInstance.get(`${domainUrl}/user/list`,{params:params}).then(res => res.data);
}