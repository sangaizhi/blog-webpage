<template>
	<div id="user" class="table-container">
		<div class="table-top-op">
			<el-button size='small' type='primary' @click.native.prevent="addArticle()">新增文章</el-button>
		</div>
		<div class="user-list table-list" >
			<el-table :data="userList" v-loading.body="loading" stripe border height="100%" style="width: auto">
				<el-table-column prop="phone" label="电话" width="180">
				</el-table-column>
				<el-table-column prop="email" label="邮箱" :formatter='substringFormat'>
				</el-table-column>
				<el-table-column prop="nickname" width="150" label="昵称">
				</el-table-column>
				<el-table-column prop="profile" width="80" label="头像">
				</el-table-column>
				<el-table-column prop="status" width="180" label="状态" :formatter='dateFormat'>
				</el-table-column>
				<el-table-column prop="createTime" width="180" label="创建时间" :formatter='dateFormat'>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="120">
					<template scope="scope">
						<el-button @click.native.prevent="handleDelete(scope.$index, scope.row.id, userList)" type="text" size="small">移除
						</el-button>
						<el-button @click.native.prevent="handleEdit(scope.$index, scope.row.id, userList)" type="text" size="small">编辑
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
	import { requestArticleList, deleteArticle, deleteArticleLabel } from "../../api/api.js";
	import { Loading } from 'element-ui';

	export default {
		data() {
			return {
				userList: [],
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
					self.loading = false;
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
			//
			substringFormat: function(row, column) {
				var val = row[column.property];
				if(val == undefined) {
					return "";
				}
				if(val.length >= 50) {
					val = val.substring(0, 49);
				}
				return val;
			},
			deletaLabel(id, rowIndex, label) {

				this.$confirm('确认删除该标签吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					var self = this;
					var params = {
						'id': id,
						'label': label
					}
					deleteArticleLabel(params).then(function(response) {
						if(response.status) {
							self.articleList[rowIndex].labelSet.splice(self.articleList[rowIndex].labelSet.indexOf(label), 1);
						} else {
							self.$message({
								showClose: true,
								message: response.msg,
								type: 'error'
							});
						}
					}, function(response) {
						self.$message({
							showClose: true,
							message: "删除失败",
							type: 'error'
						});
					});
				}).catch(() => {});
			},
			addArticle() {
				this.$router.push({
					path: "/home/article/add"
				})
			},
			handleEdit(index, id, rows) {
				this.$router.push({
					path: "/home/article/edit/"+id
				})
			},
			handleDelete(index, id, rows) {
				var self = this;
				this.$confirm('确认删除该文章吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					var self = this;
					deleteArticle(id).then(function(response) {
						if(response.status) {
							self.$message({
								showClose: true,
								message: "删除成功",
								type: 'success'
							});
							rows.splice(index, 1);
						} else {
							self.$message({
								showClose: true,
								message: response.msg,
								type: 'error'
							});
						}
					}, function(response) {
						self.$message({
							showClose: true,
							message: "删除失败",
							type: 'error'
						});
					});
				}).catch(() => {});
			}
		}
	}
</script>
<style>
	.article-tag {
		margin: 0 5px;
	}
</style>