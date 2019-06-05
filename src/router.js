import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Tjzz from './components/Tjzz.vue'
import denglu from './components/denglu.vue'
import zhuce from './components/zhuce.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path:'/tjzz',
			component:Tjzz
		},
		{
			path:'/denglu',
			component:denglu
		},
		{
			path:'/zhuce',
			component:zhuce
		}
  ]
})
