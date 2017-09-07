<template>
	<div class="right_nav">
		<div class="right_nav_top">
			<ul>
				<li class="hot active">
					<i class="fa fa-fire"></i>
				</li>
				<li class="comments">
					<i class="fa fa-comments-o"></i>
				</li>
			</ul>
		</div>
		<div class="right_nav_content">
			<div class="hot_content">
				<div v-for="content in contents">
					
				</div>
			</div>
			<div class="comment_content"></div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){return {}},
		props:['categoryId'],
		mounted(){
			console.log(this.categoryId)
		}
	}
</script>

<style>
	.right_nav{
		float: right;
		width: 15%;
		border-left: 1px solid #DEE5E7;
		box-sizing: border-box;
		background: #FFFFFF;
		height: 100%;
	}
	.right_nav_top{
		height: 50px;
		line-height: 50px;
		margin: 0;
		border-bottom: 1px solid #DEE5E7;	
	}
	.right_nav_top ul li{
		width: 50%;
		float: left;
		margin: 0;
	}
	
	.right_nav_top ul li.active{
		border-bottom: 1px solid #42b983;	
	}
	
	.right_nav_content{
		width: 100%;
		margin-top: 50px;
		overflow: auto;
	}
</style>