<template>
	<div id="category">
		<div class="category-op">
			<el-button size='small' type='primary' @click.native.prevent="addCatrgory()">新增分类</el-button>
		</div>
		<div class="category-list">
			<el-table :data="articleList" v-loading.body="loading" stripe border height="100%" style="width: auto">
				<el-table-column prop="title" label="标题" width="180">
				</el-table-column>
				<el-table-column prop="summary" label="概要" width="180">
				</el-table-column>
				<el-table-column prop="categoryName" label="所属分类"   >
				</el-table-column>
				<el-table-column prop="star" label="星数">
				</el-table-column>
				<el-table-column prop="userName" label="作者">
				</el-table-column>
				<el-table-column prop="createTime" label="发布时间" :formatter='dateFormat'>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="120">
					<template scope="scope">
						<el-button @click.native.prevent="handleDelete(scope.$index, scope.row.id, articleList)" type="text" size="small">移除
						</el-button>
						<el-button @click.native.prevent="handleEdit(scope.$index, scope.row.id, articleList)" type="text" size="small">编辑
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

	</div>

</template>

<script>
	import $ from 'jquery';
	import * as types from '../../store/types';
	import { requestArticleList, deletrCategory } from "../../api/api.js";
	import { Loading } from 'element-ui';

	export default {
		data() {
			return {
				articleList: [],
				loading: true
			}
		},
		mounted() {
			var self = this;
			var token = this.$store.state.token;
			var tokenParam = {
				'token': self.token
			}
			var loadingOptions = {
				fullscreen: true
			}
			requestArticleList(tokenParam).then(function(response) {
				if(response.status) {
					self.articleList = response.data;
					self.loading=false;
				} else {
					self.$router.push({
						path: "/login"
					})
				}
			}, function(response) {
				self.$message({
					showClose: true,
					message: "加載失敗",
					type: 'error'
				});
			});
		},
		methods: {
			//时间格式化  
			dateFormat: function(row, column) {
				var date = row[column.property];
				if(date == undefined) {
					return "";
				}
				return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
			},
			addCatrgory() {
				this.$router.push({
					path: "/home/category/add"
				})
			},
			handleEdit(index, id, rows) {
				this.$router.push({
					path: "/home/category/edit/"+id
				})
			},
			handleDelete(index, id, rows) {
				var self = this;
				deletrCategory(id).then(function(response) {
					self.$message({
						showClose: true,
						message: "删除成功",
						type: 'success'
					});
					rows.splice(index, 1);
				}, function(response) {
					self.$message({
						showClose: true,
						message: "删除失败",
						type: 'error'
					});
				});
			}
		}
	}
</script>
<style>
	#category {
		height: 100%;
		width: 100%;
	}
	
	.category-op {
		height: 50px;
		line-height: 50px;
		padding: 0 15px;
	}
	
	.category-list {
		height: calc(100% - 60px);
		bottom: 10px;
		top: 50px;
		position: absolute;
		width: 100%;
	}
	
	.category-list .el-table {
		margin: 0 15px;
		height: 100%;
		margin-bottom: 15px;
	}
</style>