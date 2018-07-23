
import Vue from 'vue'
import App from './App.vue'

import 'mint-ui/lib/style.css'
// import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Header,Button,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Swipe.name, Swipe)

new Vue({
    el:"#app",
    render: c => c(App),
    router
})