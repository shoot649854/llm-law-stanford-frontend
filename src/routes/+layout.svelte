<script>
	import '../app.pcss';
	import './styles.css';
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 1090px;
		background-color: bisque;
	}
</style>