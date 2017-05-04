<template>
	<div id="app">
		<div v-bind:style="styles">hello</div>
	</div>
	
	
</template>

<script>
  export default{
  	
  	data(){
  		return {
  			value:'http://www.baidu.com',
  			source:'static/logo.png'
  		}
  	}
  }
	
</script>

<style>
	.active {
	width: 100px;
	height: 100px;
	background: green;
}
</style>