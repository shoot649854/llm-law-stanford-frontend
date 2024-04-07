<script>
	import './styles.css';
	import Button from '../component/Button/Button.svelte';
	let DirPath = 'userInfo';

</script>

<!-- TEMPLATE -->
<div class="app">
	<h1>About Our Platform</h1>
	<main>
	
		<div>
			<h2>Our Mission</h2>
			<p>We are dedicated to empowering immigrants, especially students, by providing them with reliable, accurate, and up-to-date legal and visa information. Our goal is to simplify the complexities of immigration laws and visa applications through the use of our Law-fine-tuned LLM model.</p>
		</div>
		
		<div class="about-section">
			<h2>Services Offered</h2>
			<p>Our platform offers a range of services including:</p>
			<ul>
			<li><span class="highlight">Personalized Legal Information:</span> Customized legal advice tailored to your specific situation and questions.</li>
			<li><span class="highlight">Visa Assistance:</span> Step-by-step guidance through the visa application process, helping you understand the requirements and procedures.</li>
			<li><span class="highlight">Resources and Tools:</span> Access to a wide range of resources and tools designed to assist with immigration and visa processes.</li>
			</ul>
		</div>

		<Button userInfo={DirPath} />
		
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
