<template>
	<div id="">
		<ul>
			<router-link to="/" exact tag="li">导航1</router-link>
			<router-link to="/about" tag="li">导航2</router-link>
			<router-link :to="{name:'List',params:{aa:111}}" tag="li">导航3</router-link>
			<router-link to="/news" tag="li">导航4
			<ul>
				<router-link to="/child1" tag="li">导航1</router-link>
				<router-link to="/child2" tag="li">导航2</router-link>
			</ul>
			</router-link>
		</ul>	
	 
	</div>
	
</template>

<script>
</script>

<style>
	.router-link-active{  /*导航样式跟随*/
		color: #17A78B;
	}
	ul{
		clear: both;
		width: 100%;
	}
	li{
		float: left;
		width: 25%;
	}
		#nav{
		height: 50px;
		width: 100%;
		clear: both;
		display: block;
		background-color: #46B8DA;
	}
</style>