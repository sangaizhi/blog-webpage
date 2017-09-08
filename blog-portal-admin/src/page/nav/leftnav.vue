<template>
	<div id='left-nav'>
		<!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			<el-radio-button :label="false">展开</el-radio-button>
			<el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group>-->
		<el-menu default-active="1-4-1" class="left-nav-menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark">
			<el-submenu index="1" class='sub_menu'>
				<template slot="title" class="sub_menu_title">
					<i class="el-icon-message"></i>
					<span slot="title">导航管理</span>
				</template>
				<el-menu-item-group>
					<span slot="title">分组一</span>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="2" class='sub_menu'>
				<template slot="title">
					<i class="el-icon-message"></i>
					<span slot="title">链接管理</span>
				</template>
				<el-menu-item-group>
					<span slot="title">分组一</span>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="2-3">选项3</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
</div>
</template>
<script>
	 export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
	#left-nav{
		width: 200px;
		height: 100%;
		overflow: auto;
		background: #1F2D3D;
	}
	.left-nav-menu:not(.el-menu--collapse) {
		width: 200px;
		/*background: inherit;*/
	}
	.sub_menu{
		width: 100%;
		/*background: inherit;*/
	}
	.sub_menu .el-submenu__title{
/*		background: inherit;*/
	}
	.sub_menu ul{
		/*background: inherit !important;*/
	}
</style>