<script>
	import Header from '../component/Header.svelte';
	import './styles.css';

	import { handleTellMeMoreClick } from '../component/button';

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
		
		<div class="about-section">
			<h2>How It Works</h2>
			<p>Our platform utilizes a sophisticated LLM model fine-tuned for law and immigration issues to provide you with the most accurate and relevant advice. Simply submit your question through our platform, and our AI will analyze your query and provide detailed guidance based on current laws and regulations.</p>
		</div>

		<div class="about-section call-to-action">
			<p>Ready to get started or need more information? <a href="/contact">Contact us</a> today to see how we can help you on your journey.</p>
			<button on:click={() => handleTellMeMoreClick('/info')}>Tell Me More about Contact</button>
		</div>
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

	.about-section.call-to-action {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Aligns items to the start of the flex container, effectively left-aligning them */
  }

  .about-section.call-to-action p {
    margin-bottom: 0; /* Removes margin below the paragraph to reduce space between the text and the button */
  }

  .about-section.call-to-action button {
    align-self: flex-end; /* Aligns the button to the end of the flex container, effectively right-aligning it */
    margin-top: 20px; /* Adds some space between the text and the button */
  }
  
	button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }

</style>
