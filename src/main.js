import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './lib/net/Axios'
import Navbar from './components/common/NavBar'
import Sidebar from './components/common/SideBar'
import {
  MdApp,
  MdToolbar,
  MdDrawer,
  MdContent,
  MdTabs,
  MdButton,
  MdField,
  MdIcon
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css' // material UI

// register Material UI component
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdDrawer)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdIcon)

// register common components
Vue.component('nav-bar', Navbar)
Vue.component('side-bar', Sidebar)

// register mixins
Vue.prototype.$http = request

// Vue config and create
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
