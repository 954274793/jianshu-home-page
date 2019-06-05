<template>
  <div>
		<header class="layui-row">
			<li class="layui-col-md1 layui-col-xs3 left">
				<a href="/"><img src="../images/logo.png" /></a>
			</li>
			<li class="layui-col-md1" style="border-top: 1px solid #FFFFFF;"></li>
			<li class="layui-col-md1 layui-hide-xs center">
				<i class="layui-icon layui-icon-find-fill"></i>  首页
			</li>
			<li class="layui-col-md1 layui-hide-xs center1">
				<i class="layui-icon layui-icon-cellphone"></i>  下载App
			</li>
			<li class="layui-col-md2 layui-hide-xs center2">
				<div class="input">
					<input type="text" placeholder="搜索"><i class="layui-icon layui-icon-search"></i>
				</div>
			</li>
			<li class="layui-hide-md layui-col-xs1" style="line-height: 58px;"><i class="layui-icon layui-icon-spread-left" style="font-size: 20px; color: rgb(150,150,150);"></i></li>
			<li class="layui-col-md2 layui-col-xs4" style="border-top: 1px solid #FFFFFF;"></li>
			<li class="layui-col-md1 layui-col-xs3 center3">
				<p class="layui-col-md6 layui-col-xs5">Aa</p>
				<i class="layui-col-md2 layui-col-xs3 layui-icon layui-icon-diamond"></i>
				<span class="layui-badge">beta</span>
			</li>
			<li class="layui-col-md3 layui-hide-xs right">
				<a class="layui-col-md4" href="/denglu">登录</a>
				<a href="/zhuce"><div class="layui-col-md3 right1">注册</div></a>
				<div class="layui-col-md5 right2"><i class="layui-icon layui-icon-tree"></i>  写文章</div>
			</li>
		</header>
  </div>
</template>

<script>
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		font-weight: '微软雅黑';
	}
	header{
		width: 100%;
		height: 58px;
		border-bottom: 1px solid #CCCCCC;
		position:fixed;
		z-index: 1;
		background-color: #FFFFFF;
	}
	.left{
	}
	.left img{
		height: 58px;
		margin: 0 auto; 
		float: right;
		cursor: pointer;
	}
	.center{
		font-size: 16px;
		line-height: 58px;
		color: rgb(233,111,90);
		text-align: center;
		cursor: pointer;
	}
	.center i{
		font-size: 16px;
		color: rgb(233,111,90);
	}
	.center1{
		font-size: 16px;
		line-height: 58px;
		text-align: center;
		cursor: pointer;
	}
	.center1 i{
		font-size: 16px;
	}
	.center1:hover{
		background-color: rgb(245,245,245);
	}
	.center2{
		text-align: center;
	}
	.input input{
		width: 160px;
		border: none;
		background-color: rgb(238,238,238);
		color: ;
	}
	.input i{
		float: right;
	}
	.input{
		width: 240px;
		height: 38px;
		border-radius: 40px;
		margin-top: 10px;
		line-height: 38px;
		background-color: rgb(238,238,238);
		color: rgb(150,150,150);
		margin-left: 15px;
	}
	.center2 i{
		margin-right: 20px;
	}
	.center3{
		line-height: 58px;
		text-align: center;
	}
	.center3 p{
		color: rgb(150,150,150);
		font-size: 20px;
		cursor: pointer;
	}
	.center3 i{
		font-size: 22px;
		color: rgb(233,111,90);
		font-weight: bold;
		cursor: pointer;
	}
	.center3 span{
		background-color: rgb(233,111,90);
		width: 30px;
		height: 15px;
		cursor: pointer;
	}
	.right{
	}
	.right a{
		font-size: 16px;
		color: #969696;
		text-align: center;
		line-height: 58px;
		text-decoration: none;
	}
	.right1{
		width: 80px;
		height: 38px;
		border: 1px solid rgb(233,111,90);
		border-radius: 20px;
		margin-top: 10px;
		line-height: 38px;
		text-align: center;
		color: rgb(233,111,90);
		cursor: pointer;
	}
	.right1:hover{
		background-color: rgb(254,247,246);
	}
	.right2{
		width: 100px;
		height: 38px;
		margin-left: 20px;
		border-radius: 20px;
		background-color: rgb(233,111,90);
		color: #FFFFFF;
		margin-top: 10px;
		line-height: 38px;
		text-align: center;
		cursor: pointer;
	}
	.right2:hover{
		background-color: rgb(236,97,73);
	}
</style>
