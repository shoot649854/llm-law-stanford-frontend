<script>
	import './styles.css';
	import NextButton from '../component/Button/nextButton.svelte';
	let UserPath = 'userInput';
	let DocumentPath = 'documentInput';	

</script>

<!-- TEMPLATE -->
<div class="app">
	<h1>Oppty</h1>
	<main>
	
		<div>
			<h2>Our Mission</h2>
			<p>We are dedicated to empowering immigrants, especially students, by providing them with reliable, accurate, and up-to-date legal and visa information. Our goal is to simplify the complexities of immigration laws and visa applications through the use of our Law-fine-tuned LLM model.</p>
		</div>
		
		
		<NextButton userInfo={UserPath} />
		<NextButton userInfo={DocumentPath} />
		
	</main>
</div>

<!-- STYLES -->
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
	}

</style>
