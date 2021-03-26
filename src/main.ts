// @ts-nocheck
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from '@/router/index'
import store from './store'
import Nav from '@/components/common/nav/Nav.vue'
import * as Echarts from 'echarts'
import toast from '@/common/toast/index.js'


import {Popup,DatetimePicker} from 'vant';
import 'vant/lib/popup/style';
import 'vant/lib/datetime-picker/style';

// import Toast from '@/components/common/toast/index.js'


Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(toast)
Vue.config.productionTip = false
Vue.component('NavV',Nav)
// Vue.use(Toast)

Vue.prototype.$echarts = Echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if(document.documentElement.clientWidth > 500){
  window.alert('请使用手机打开本页面，以保证浏览效果')
}

