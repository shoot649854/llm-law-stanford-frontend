<script>
    import { name } from "../../component/store";
</script>

<svelte:head>
    <title>Info</title>
    <meta name="Info" content="Information input" />
</svelte:head>

<div class="app">
    <main>
        <h1>chat, hello {$name}</h1>
    </main>
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: auto;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		gap: 20px;
		position: center;
	}

    
</style>