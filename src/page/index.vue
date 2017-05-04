<template>
	<div>
		我是内容
		
		<child3 :child="child"></child3>
		<p  :childcontent="childmsg"></p>
		<p>{{val}}</p>
	</div>
</template>

<script>
	import Child3 from '@/page/child3'

	export default {
		components: {
			Child3
		},

		data() {
			return { //返回数据到data上
				val: "", //定义一个空数据
				child: [{
					"id": 1,
					"name": "wenwen1"
				}, {
					"id": 2,
					"name": "asdjf"
				}]
			}
		},
		methods:{
			childmsg(msg){
				this.val=msg
			}
		}
		
	}
</script>

<style>

</style>