import 'babel-polyfill'
import 'classlist-polyfill'
import Vue from 'vue'
import axios from './router/axios'
import VueAxios from 'vue-axios'
import App from './App'
import './permission' // 权限
import './error' // 日志
import router from './router/router'
import 'avue-plugin-transfer/packages' // 引入avue-plugin-transfer插件
// import 'avue-plugin-ueditor/packages' //引入avue-plugin-ueditor插件(如果要兼容ie自行换掉富文本编辑器，此款插件不兼容ie)
import store from './store'
import { loadStyle } from './util/util'
import * as urls from '@/config/env'
import { iconfontUrl, iconfontVersion } from '@/config/env'
import * as filters from './filters' // 全局filter
import './styles/common.scss'
// // 引入avue的包
import Avue from '@smallwei/avue/lib/index.js'
// // 引入avue的样式文件
import '@smallwei/avue/lib/theme-chalk/index.css'
import basicContainer from './components/basic-container/main'
import VueClipboard from 'vue-clipboard2'
// 插件 json 展示
import vueJsonTreeView from 'vue-json-tree-view'

// //源文件包
// import '../packages/index.js';
// import '../packages/theme-chalk/src/index.scss';

Vue.use(Avue, { menuType: 'text' })

Vue.use(router)

Vue.use(VueClipboard)

Vue.use(vueJsonTreeView)

Vue.use(VueAxios, axios)

Vue.component('basicContainer', basicContainer)

Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key]
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele))
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
