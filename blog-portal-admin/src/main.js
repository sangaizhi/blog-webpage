import Vue from 'vue';
import App from './App.vue';
// 导入 element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

// 导入本地存储
import store from './store/store.js';
// 导入 vue-router
import router from './router/router.js';
// 导入验证 js
import './validate/validate.js';

// 导入自定义 css
import './assets/css/style.css';

Vue.use(ElementUI);



new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
