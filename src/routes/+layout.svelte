<script>
	import '../app.pcss';
	import './styles.css';
	import Header from '../component/Header.svelte';
	import ChatHistory from '../component/Message/ChatHistory.svelte';
</script>

<div class="app">
	<Header />
		
	<slot />

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 1090px;
		/* padding-top: 10px; */
		padding-bottom: 10px;
		background-color: bisque;
	}

</style>