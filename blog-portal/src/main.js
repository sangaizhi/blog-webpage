import Vue from 'vue'
import App from './App.vue'

// 引入网络请求与资源组件
import VueResource from 'vue-resource';
// 引入 element UI 组件
import ElementUI from 'element-ui';
// 引入图标组件
import Icon from './components/Icon.vue';

import 'element-ui/lib/theme-default/index.css';
import './assets/css/index.css';
import 'font-awesome/css/font-awesome.css';
import './icons/index.js';
//引入路由组件
import {axios,fetch,patch,post,put} from './util/http'
import store from './store/store'
import router from './router'

//开启debug模式
Vue.config.debug = true;

//Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.component("icon", Icon);


Vue.prototype.$post=post;
Vue.prototype.$get=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;




// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App)
})