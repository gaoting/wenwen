import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/page/index'
import List from '@/page/list'
import News from '@/page/news'
import About from '@/page/about'
import Child1 from '@/page/child1'
import Child2 from '@/page/child2'
import LL from '@/page/ll'
import RR from '@/page/rr'

Vue.use(VueRouter) //使用上方引入的第三方插件

export default new VueRouter({
	mode: 'history',
	routes: [{
			path: '/',
			component: Index
		
		},
		{
			path: '/List',
			name: 'List',
			component: List
		},
		{
			path: '/News',
			component: News,
			children: [{
				path: '/Child1',
				component: Child1
			}, {
				path: '/Child2',
				component: Child2
			}]

		},
		{
			path: '/About',
			component: About
	
		}

	]
})