// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Paginate from 'vuejs-paginate'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/store'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('paginate', Paginate)
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //代码高亮样式文件

Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    setTimeout(() =>{
        blocks.forEach((block)=>{
        hljs.highlightBlock(block)
        })
    }, 200)
})
Vue.prototype.$http = axios
//全局事件对象
Vue.prototype.xie = new Vue()
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
