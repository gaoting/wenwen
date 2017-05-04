<template>
	<div id="app">

		<div id="nav">
			<app-header></app-header>
		</div>
		<div id="content">
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut ">
				<keep-alive>
					<router-view class="content"></router-view>
										
					<router-view name="left" class="ll"></router-view>
					<router-view name="right" class="rr"></router-view>
					
				</keep-alive>
			</transition>
		</div>
		<app-footer></app-footer>
	</div>

</template>

<script>
	import appHeader from '@/components/appHeader' //引用组件
	import appFooter from '@/components/appFooter'

	export default { //导出
		components: { //导出的组件
			appHeader,
			appFooter
		}
	}
</script>

<style lang="scss">
	
	
	.content {
		margin-top: 0px;
		width: 100%;
		height: 300px;
		background-color: #17A78B;
		color: #fff;
	}
		
	.ll{
		float: left;
		width: 50%;
		height: 800px;
		background-color: #245269;
	}
	.rr{
		float: right;
		width: 50%;
		height: 800px;
		background-color: #428BCA;
	}
	
</style>