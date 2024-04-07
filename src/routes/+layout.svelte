<script>
	import '../app.pcss';
	import './styles.css';
	import Header from '../component/Header.svelte';
</script>

<div class="app">
	<Header />
	<slot />

	<!-- <footer>
		<p> This project is made for LLM × Law hackathon at Stanford
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 1090px;
		background-color: bisque;
	}
</style>