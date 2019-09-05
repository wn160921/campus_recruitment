import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {post,fetch,patch,put} from './request'

import ElementUI from 'element-ui';
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/css/common.css'

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.config.productionTip = false

//定义全局过滤器
Vue.filter('noMiddle',function (value) {
  if(value.length<4){
    return value
  }else {
    return value.substring(0,3)+"****"+value.substring(value.length-4,value.length-1);
  }
});
Vue.prototype.history = [{name:"首页",path:"/"}];
router.afterEach((to) => {
  let curr  = {name:to.name,path:to.path};
  let index = Vue.prototype.history.findIndex(a=>a.name==curr.name && a.path==curr.path);
  if(index!=-1){
    Vue.prototype.history.slice(index,Vue.prototype.history.length);
  }else {
    Vue.prototype.history.push(curr)
  }
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
