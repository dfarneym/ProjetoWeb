import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Token incorporado para qualquer requisição que o axios fizer
// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6Ikx1Y2FzIERhbWFzY2VubyIsImVtYWlsIjoibHVjYXNkYW1hc2Nlbm9AZ21haWwuY29tIiwiYWRtaW4iOiJ0cnVlIiwiaWF0IjoxNTg1OTQ1NjAzLCJleHAiOjE1ODYyMDQ4MDN9.O9K5YQHKmv92asecqfZSBn99t-Nfnxx4yP4mhgKF30w'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')