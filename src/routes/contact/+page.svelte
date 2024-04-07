<script>
    // You can add reactive statements here to respond to input changes
    let firstName = '';
    let lastName = '';
    let birthDate = '';
    let switch1 = false;
    let switch2 = false;
    let checkbox1 = false;
    let checkbox2 = false;
    let checkbox3 = false;
</script>

<svelte:head>
    <title>Info</title>
    <meta name="Info" content="Information input" />
</svelte:head>

<div class="app">
	<main>
		<div>
			<label for="firstName"><p>First Name:</p></label>
			<input type="text" id="firstName" bind:value={firstName}>
		
		</div>
		<div>
			<label for="lastName"><p>Last Name:</p></label>
			<input type="text" id="lastName" bind:value={lastName}>
		
		</div>
		<div>
			<label for="birthDate"><p>Birth Date:</p></label>
			<input type="date" id="birthDate" bind:value={birthDate}>
		
		</div>
		<div>
			<label class="switch">
				<input type="checkbox" bind:checked={switch1}>
				<span class="slider round"></span>
			</label>
		</div>
		<div>
			<label class="switch">
				<input type="checkbox" bind:checked={switch2}>
				<span class="slider round"></span>
			</label>
		</div>
	
		<div>
			<label>
				<input type="checkbox" bind:checked={checkbox1}> Checkbox 1
			</label>
		</div>
		<div>
			<label>
				<input type="checkbox" bind:checked={checkbox2}> Checkbox 2
			</label>
		</div>
		<div>
			<label>
				<input type="checkbox" bind:checked={checkbox3}> Checkbox 3
			</label>
		</div>
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

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>