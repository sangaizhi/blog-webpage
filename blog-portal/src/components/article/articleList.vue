<template>
	<div>
		<div class="article_container">
			<div class="article_water_fall">
				<div class="article" v-for="article in articleList">
					<p class="article_title">{{article.title}}</p>
					<div class="article_context">
						{{article.context}}
					</div>
					<p class="article_info">
						<span class="fa fa-user-o">{{article.author}}</span>
						<span class="fa fa-calendar">{{article.time}}</span>
						<span class="fa fa-comments-o">{{article.comments}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import * as types from '../../store/types';
	import axiosInstance from '../../util/http';
	import rightNav from '../navigation/rightNav.vue';
	export default {
		name: 'articleList',
		data() {
			return {
				articleList: [{
						title: 'Nginx SSL+tomcat集群确的协议',
						context: '最近在做一个项目, 架构上使用了 Nginx +tomcat 集群,  15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme() 取到https正确的协议',
						context: '最近在做一个项目, 架构上使用了 Nginx +tomcat 集群, 且nginx下配置了SSL,tomcat no SSL,项目使用https协议但是, 明明是https url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme() 取到https正确的协议',
						context: '最近集群, 且nginx下配置了SSL,tomcat no SSL,项目使用https协议但是, 明明是https url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协议',
						context: '最近在做一个群, 且nginx下配置ttps url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协议',
						context: '最近在做一个群, 且nginx下配置ttps url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协议',
						context: '最近在做一个群, 且nginx下配置ttps url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协议',
						context: '最近在做一个群, 且nginx下配置ttps url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协议',
						context: '最近在做一个群, 且nginx下配置ttps url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协议',
						context: '最近在做一个群, 且nginx下配置ttps url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协个群, 且nginx下配置ttps url请求议',
						context: '最近在做一个群, 且nginx下配置ttps url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Ngin议',
						context: '最近在s url请求,发现 log里面,0428 15:55:55 INFO (IndexInterceptor.java:44) preHandle() - requestStringForLog: { &...',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					},
					{
						title: 'Nginx SSL+tomcat集群,request.getScheme正确的协议',
						context: '缓存是提升应用性能的常用手段，为框架中最通用的功能，每个框架也都推出专属的、功能多 样的缓存库。这些差别使得开发人员不得不学习存库的开发者同样面人员能够知道缓存系统会按照他们所 预期的方式工作，缓存系统的开发人缓存是提升应用性能的常用手段，为框架中最通用的功能，每个框架也都推出专属的、功能多 样的缓存库。这些差别使得开发人员不得不学习多种系统，而很多可能是他们并不需要的功能。 此外，缓存库的开发者同样面临着一个窘境，是只支持有限数量的几个框架还是创建一堆庞 大的适配器类。一个通用的缓存系统接口可以解决掉这些问题。库和框架的开发人员能够知道缓存系统会按照他们所 预期的方式工作，缓存系统的开发人缓存是提升应用性能的常用手段，为框架中最通用的功能，每个框架也都推出专属的、功能多 样的缓存库。这些差别使得开发人员不得不学习多种系统，而很多可能是他们并不需要的功能。 此外，缓存库的开发者同样面临着一个窘境，是只支持有限数量的几个框架还是创建一堆庞 大的适配器类。一个通用的缓存系统接口可以解决掉这些问题。库和框架的开发人员能够知道缓存系统会按照他们所 预期的方式工作，缓存系统的开发人缓存是提升应用性能的常用手段，为框架中最通用的功能，每个框架也都推出专属的、功能多 样的缓存库。这些差别使得开发人员不得不学习多种系统，而很多可能是他们并不需要的功能。 此外，缓存库的开发者同样面临着一个窘境，是只支持有限数量的几个框架还是创建一堆庞 大的适配器类。一个通用的缓存系统接口可以解决掉这些问题。库和框架的开发人员能够知道缓存系统会按照他们所 预期的方式工作，缓存系统的开发人缓存是提升应用性能的常用手段，为框架中最通用的功能，每个框架也都推出专属的、功能多 样的缓存库。这些差别使得开发人员不得不学习多种系统，而很多可能是他们并不需要的功能。 此外，缓存库的开发者同样面临着一个窘境，是只支持有限数量的几个框架还是创建一堆庞 大的适配器类。一个通用的缓存系统接口可以解决掉这些问题。库和框架的开发人员能够知道缓存系统会按照他们所 预期的方式工作，缓存系统的开发人缓存是提升应用性能的常用手段，为框架中最通用的功能，每个框架也都推出专属的、功能多 样的缓存库。这些差别使得开发人员不得不学习多种系统，而很多可能是他们并不需要的功能。 此外，缓存库的开发者同样面临着一个窘境，是只支持有限数量的几个框架还是创建一堆庞 大的适配器类。一个通用的缓存系统接口可以解决掉这些问题。库和框架的开发人员能够知道缓存系统会按照他们所 预期的方式工作，缓存系统的开发人。',
						author: '测试',
						time: '2017-12-13',
						comments: '10'
					}

				],
				categoryId: this.$route.params.categoryId
			};
		},
		mounted() {},
		components: {
			rightNav
		}
	}
</script>

<style>
	.article_container {
		width: 100%;
	}
	
	.article_water_fall {
		-moz-column-count: 4;
		/* Firefox */
		-webkit-column-count: 4;
		/* Safari 和 Chrome */
		column-count: 4;
		/* 用整数值来定义列数。不允许负值 */
		-moz-column-gap: 1em;
		-webkit-column-gap: 1em;
		column-gap: 1em;
		/*用长度值来定义列与列之间的间隙。不允许负值*/
		float: left;
		padding: 20px;
	}
	
	.article {
		padding: 1em;
		margin: 0 0 1em 0;
		-moz-page-break-inside: avoid;
		-webkit-column-break-inside: avoid;
		break-inside: avoid;
		/*margin: 10px 20px;*/
		border-radius: 5px;
		background: #FFFFFF;
		/*padding: 30px 30px 5px 30px;*/
		color: #58666e;
	}
	
	.article .article_title {
		display: inline-block;
		line-height: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 18px;
		width: 100%;
		text-align: left;
		margin: 0;
	}
	
	.article .article_context {
		text-align: left;
		font-size: 12px;
		word-break: break-all!important;
		margin-bottom: 30px;
		margin-top: 20px;
	}
	
	.article .article_info {
		font-size: 12px;
		padding-top: 10px;
		text-align: left;
		height: 30px;
		line-height: 30px;
		border-top: 1px solid #edf1f2;
		margin: 0;
	}
	
	.article .article_info span {
		margin-right: 15px;
		;
	}
	
	.article .article_info span:before {
		padding-right: 10px;
	}
</style>