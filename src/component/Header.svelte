<script>
    import { page } from '$app/stores';
	import { goto } from '$app/navigation';
    import logo from '$lib/images/optty-logo.png';
    // import github from '$lib/images/github.svg';
</script>

<header>
    <div class="corner">
        <!-- Logo -->
        <div class="logo">
            <img src={logo} alt="Logo">
        </div>
    </div>
	<div class="button-wrapper">
		<div class="buttons">
			<!-- Info Button -->
			<button class="info-button" on:click={() => goto('./')}>Info</button>
			<!-- Chat Button -->
			<button class="chat-button" on:click={() => goto('./chat')}>Chat</button>
		</div>
	</div>
</header>

<style>
    header {
        height: auto;
        display: flex;
        justify-content: space-between;
        background-color: #435334;
        padding: 10px; /* Add padding for better appearance */
    }


    .corner img {
        width: 36px; /* Set width for the logo */
        height: auto; /* Maintain aspect ratio */
        margin-left: 50%;
    }

    .buttons {
        display: flex; /* Use flexbox for button container */
    }

	.button-wrapper {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
	}

    .info-button,
    .chat-button {
        margin-left: 10px; /* Add space between buttons */
        
        color: white; /* Set text color */
        border: none; /* Remove border */
        padding: 10px 20px; /* Add padding */
        border-radius: 5px; /* Add border radius */
        cursor: pointer; /* Add cursor pointer */
        transition: background-color 0.3s ease; /* Add transition effect */
    }

    .info-button:hover,
    .chat-button:hover {
        background-color: #0056b3; /* Change background color on hover */
    }
</style>