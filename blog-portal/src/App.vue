<template>
	<div id="app">
		<leftNav></leftNav>
		<div class="main" id="main">
			<router-view class='view'></router-view>
			<router-view class='view' name='other'></router-view>
		</div>
	</div>
</template>

<script>
	import * as types from './store/types';
	import leftNav from './components/navigation/leftNav.vue';
//	import container from './components/container.vue';
	import { mapState } from 'vuex';
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components:{leftNav},
		computed: mapState({
			title: state => state.title,
			token: state => state.token
		}),
		methods: {
			logout() {
				this.$store.commit(types.LOGOUT)
				this.$router.push({
					path: '/'
				})
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		position: absolute;
		left:0;
		right: 0;
		top:0;
		bottom: 0;
		height: 100%;
		width: 100%;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>