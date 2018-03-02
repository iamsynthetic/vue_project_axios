import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-axios-ee86c.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'generic token maybe'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqIntercepter = axios.interceptors.request.use(config => {
  console.log('request intercepter', config)
  return config
})

const resIntercepter = axios.interceptors.response.use(res => {
  console.log('response intercepter', res)
  return res
})

axios.interceptors.request.eject(reqIntercepter)
axios.interceptors.response.eject(resIntercepter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
