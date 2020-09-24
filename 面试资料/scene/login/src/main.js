import App from './App.vue'
import router from './router'
import './assets/css/global.css'

axios.defaults.baseURL = 'http://127.0.0.1:3000/'


Vue.config.productionTip = false
Vue.prototype.$http = axios


//处理时间格式的过滤器
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0') //两位 不足用0来填充

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
