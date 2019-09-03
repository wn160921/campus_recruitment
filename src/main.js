import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {post,fetch,patch,put} from './request'

import ElementUI from 'element-ui';
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css';

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
