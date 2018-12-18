import Vue from 'vue'
import App from './App'
import api from './api/Api.js'
import wxrouter from './utils/WxRouter.js'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$api=api;//微信小程序网络请求的配置
Vue.prototype.$router=wxrouter;//微信小程序网络请求的配置

const app = new Vue(App)
app.$mount()
