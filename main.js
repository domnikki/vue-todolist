// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TodoList from './components/TodoList'
import Detail from './components/Detail'
import Add from './components/Add'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', component: TodoList },
    { path: '/add', component: Add },
    { path: '/detail/:id', component: Detail },
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
})
