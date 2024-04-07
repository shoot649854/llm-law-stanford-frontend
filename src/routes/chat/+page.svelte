<script>
    // import { name } from "../../component/store";
	import ChatHistory from "../../component/Message/ChatHistory.svelte";
	import ChatMessage from '../../component/Message/ChatMessage.svelte';
	import Input from '../../component/Message/Input.svelte';
	// import Sidebar from "./sidebar.svelte";
	import { chatMessages, answer } from '../../component/stores/chat-messages';
  
	let query = '';
  
	const handleSubmit = async () => {
	  answer.set('...');
	  await chatMessages.set(query);
	  query = '';
	};
</script>

<svelte:head>
    <title>Info</title>
    <meta name="Info" content="Information input" />
</svelte:head>

<div class="app">
	
	<section class="wrap">
		<div class="flex flex-col gap-2">
			<ChatHistory />
		</div>
		<main>
	  
			<div class="chat-container">
				<div class="chat-messages">
					<div class="chat-message-wrapper">
					{#each $chatMessages.messages as message}
						<ChatMessage type={message.role} message={message.content} />
					{/each}
				
					{#if $answer}
						<ChatMessage type="assistant" message={$answer} />
					{/if}
					</div>
				</div>
				<form class="chat-form" on:submit|preventDefault={handleSubmit}>
					<Input type="text" bind:value={query} class="w-full" />
					<button type="submit" class="send-button">
					Send
					</button>
				</form>
			</div>
		</main>
	  </section>
</div>

<style>
	.app {
		display: flex;
		flex-direction: row; /* this is default and does not need to be specified unless you're overriding another style */
		align-items: start; /* aligns children of .app at the start of the cross axis, which is at the top if flex-direction is row */
		/* min-height: auto; minimum height of the container; auto will be the height of the content */
		flex-wrap: nowrap; /* prevents wrapping of items, ensuring they stay in a single line */
		gap: 10px; 
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

	.wrap {
		display: flex;
		max-width: 6xl;
		width: 100%;
		height: 100%;
		justify-content: center;
	}
	.chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 2rem; /* px-8, assuming 1rem = 4 */
    padding-right: 2rem; /* px-8, assuming 1rem = 4 */
    align-items: center;
    gap: 0.5rem; /* gap-2, assuming 1rem = 4 */
  }

  .chat-messages {
    height: 700px;
    width: 100%;
    background-color: rgba(0.1, 0.1, 0.1, 0.1); /* bg-black bg-opacity-20 */
    border-radius: 0.375rem; /* rounded-md */
    padding: 1rem; /* p-4, assuming 1rem = 4 */
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* gap-4, assuming 1rem = 4 */
  }

  .chat-message-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* gap-2, assuming 1rem = 4 */
  }

  .chat-form {
    display: flex;
    width: 100%;
    border-radius: 0.375rem; /* rounded-md */
    gap: 1rem; /* gap-4, assuming 1rem = 4 */
    padding: 0.5rem; /* p-2, assuming 1rem = 4 */
  }

  .send-button {
    background-color: rgba(0, 0, 0, 0.4); /* bg-black bg-opacity-40 */
    padding-left: 2rem; /* px-8, assuming 1rem = 4 */
    padding-right: 2rem; /* px-8, assuming 1rem = 4 */
    padding-top: 0.375rem; /* py-1.5, assuming 1rem = 4 */
    padding-bottom: 0.375rem; /* py-1.5, assuming 1rem = 4 */
    margin-left: -0.125rem; /* ml-[-0.5rem], assuming 1rem = 4 */
    border-radius: 0.375rem; /* rounded-md */
  }

  .send-button:hover {
    background-color: rgba(255, 255, 255, 0.05); /* hover:bg-white/5 */
  }
</style>