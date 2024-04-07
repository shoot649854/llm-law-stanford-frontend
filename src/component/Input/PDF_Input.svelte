<script lang="ts">
	import Dropzone from "svelte-file-dropzone";
	import { handleFilesSelect } from "./handleFilesSelect";
	import { handleUpload } from "../Upload/upload";
	let files = {
		accepted: [] as any[],
		rejected: [] as any[],
		extractedText: [] as string[]
	};

</script>

<section>
    <Dropzone on:drop={handleFilesSelect} />

    <ol>
        {#each files.accepted as item (item.name)}
            <li>{item.name}</li>
        {/each}
    </ol>
    <div>
        {#each files.extractedText as text, index (index)}
            <p>{text}</p>
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>