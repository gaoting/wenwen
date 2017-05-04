import Vue from 'vue'
import router from './router'
import Layout from '@/components/Layout'//引入组件
import Animate from '@/assets/css/animate.css'
import Axios from 'axios'
Vue.prototype.$http=Axios;

/* eslint-disable no-new */
new Vue({
	el: '#app',//操作的边界
	router,
	template: '<Layout/>',
	components: {
		Layout
	}
})