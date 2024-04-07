<script>
    // import { name } from "../../component/store";
	import ChatHistory from "../../component/Message/ChatHistory.svelte";
	import ChatMessage from '../../component/Message/ChatMessage.svelte';
	import Input from '../../component/Message/Input.svelte';
	import Sidebar from "./sidebar.svelte";
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
	<div class="sidebar">
	  <Sidebar />
	</div>

	<section class="flex max-w-6xl w-full pt-4 justify-center">
		<div class="flex flex-col gap-2">
		<ChatHistory />
		</div>
  
	<div class="flex flex-col w-full px-8 items-center gap-2">
	  <div class="h-[700px] w-full bg-black bg-opacity-20 rounded-md p-4 overflow-y-auto flex flex-col gap-4">
		<div class="flex flex-col gap-2">
		  {#each $chatMessages.messages as message}
			<ChatMessage type={message.role} message={message.content} />
		  {/each}
  
		  {#if $answer}
			<ChatMessage type="assistant" message={$answer} />
		  {/if}
		</div>
	  </div>
	  <form
		class="flex w-full rounded-md gap-4 bg-black bg-opacity-20 p-2"
		on:submit|preventDefault={handleSubmit}
	  >
		<Input type="text" bind:value={query} class="w-full" />
		<button
		  type="submit"
		  class="bg-black bg-opacity-40 hover:bg-white/5 px-8 py-1.5 border border-black/40 ml-[-0.5rem] rounded-md text-teal-300"
		>
		  Send
		</button>
	  </form>
	</div>
  </section>
</div>

<style>
	.app {
		display: flex;
		flex-direction: row; /* this is default and does not need to be specified unless you're overriding another style */
		align-items: start; /* aligns children of .app at the start of the cross axis, which is at the top if flex-direction is row */
		min-height: auto; /* minimum height of the container; auto will be the height of the content */
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

	
</style>