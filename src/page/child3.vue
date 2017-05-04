<template>
<div id="">
	<p v-for="(item,index) in child">{{item.name}}</p>
	<p @click="btn">me</p>
	
</div>
</template>

<script>
	export default{
		props:{
			child:{
				
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				msg:"sssssssss"
			}
		},
		methods:{
			btn(){
				alert(1)
				this.$emit('childcontent',this.msg)
			}
		}
	}
</script>

<style>
</style>