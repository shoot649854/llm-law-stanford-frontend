<script lang="ts">
	import { onMount } from 'svelte';

	import Chat from './Chat.svelte';
	import Pencil from './Pencil.svelte';
	import Plus from './Plus.svelte';
	import Trash from './Trash.svelte';

	import { chatMessages } from '../stores/chat-messages';
	import {
		chatHistory,
		filterHistory,
		chatHistorySubscription,
		loadMessages
	} from '../stores/chat-history';

	let chatHistoryKeys: any = [];

	onMount(() => {
		chatHistorySubscription.set($chatHistory);
		chatHistorySubscription.subscribe((value: any) => {
			chatHistoryKeys = Object.keys(value);
		});
	});
</script>

<div class="chat-history">
	<div class="header-title">
		<span class="text-white">Optty CHATBOT</span>
	</div>

	<button
		on:click={chatMessages.reset}
		class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20"
	>
		<Plus /> New chat
	</button>

	{#if chatHistoryKeys.length > 0}
		{#each chatHistoryKeys as message (message)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => loadMessages(message)}
				class="flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 bg-opacity-40 hover:bg-white/5  bg-black  group animate-flash text-sm"
			>
				<Chat />
				<div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">{message}</div>

				<div class="absolute flex right-1 z-10 text-gray-300 visible">
					<button on:click={() => loadMessages(message)} class="p-1 hover:text-white">
						<Pencil />
					</button>
					<button
						on:click|preventDefault={() => filterHistory(message)}
						class="p-1 hover:text-white"
					>
						<Trash />
					</button>
				</div>
			</div>
		{/each}
	{/if}
</div>


<style>
	.header-title {
        align-self: flex-start; /* corresponds to 'self-start' */
        margin-left: 1.5rem; /* corresponds to 'ml-6', assuming 1rem = 4 */
        font-size: 1.5em; /* corresponds to 'text-2xl' */
        font-weight: bold; /* corresponds to 'font-bold' */
    }
	
	.chat-history {
		height: 100%; /* corresponds to 'h-[700px]' */
		width: 350px; /* corresponds to 'w-[350px]' */
		background-color: rgba(0, 0, 0, 0.2); /* corresponds to 'bg-black bg-opacity-20' */
		border-radius: 0.375rem; /* corresponds to 'rounded-md', typically 0.375rem for medium */
		padding-top: 1rem; /* corresponds to 'py-4', assuming 1rem = 4 */
		padding-bottom: 1rem; /* corresponds to 'py-4', assuming 1rem = 4 */
		padding-left: 0.5rem; /* corresponds to 'px-2', assuming 1rem = 4 */
		padding-right: 0.5rem; /* corresponds to 'px-2', assuming 1rem = 4 */
		overflow-y: auto; /* corresponds to 'overflow-y-auto' */
		display: flex; /* corresponds to 'flex' */
		flex-direction: column; /* corresponds to 'flex-col' */
		gap: 0.5rem; 
		background-color: #435334;
	}
</style>