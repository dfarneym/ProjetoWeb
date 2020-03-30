import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRhbmllbCBGYXJuZXkgTS4gTW9yZWlyYSIsImVtYWlsIjoiZl9mYXJuZXlAaG90bWFpbC5jb20iLCJhZG1pbiI6InRydWUiLCJpYXQiOjE1ODU0NDY3ODYsImV4cCI6MTU4NTcwNTk4Nn0.2Tu81rd8Y8SvyCNu00fe34iCxpABa4Yji_XUUZFXSkY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')