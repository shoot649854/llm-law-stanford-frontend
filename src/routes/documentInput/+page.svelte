<script>
    import { formatName } from "../userInput/formatName";
    import { name } from "../../component/store";
    import NextButton from "../../component/Button/nextButton.svelte";
    import PdfInput from "../../component/Input/PDF_Input.svelte";
	let DirPath = 'chat';
    let firstName = '';
    let lastName = '';
    let birthDate = '';
    let switch1 = false;
    let switch2 = false;
    let checkbox1 = false;
    let checkbox2 = false;
    let checkbox3 = false;

    $: if (firstName || lastName) {
        name.set(formatName(firstName, lastName));
    }

    $: isButtonDisabled = !firstName || !lastName || !birthDate || 
                          !(switch1 || switch2) || 
                          !(checkbox1 || checkbox2 || checkbox3);
</script>

<svelte:head>
    <title>Info</title>
    <meta name="Info" content="Information input" />
</svelte:head>

<div class="app">
    <main>
        
        <PdfInput></PdfInput>

        <NextButton userInfo={DirPath} {isButtonDisabled} />
        <!-- <PdfViewer data={atob(base64)}, url='./Resume-SWE.pdf' /> -->
	</main>
</div>


<style>
	.app {
        margin-top: 10px;
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

    .mui-textfield {
        margin-bottom: 20px;
        height: auto;
        display: flex;
        flex-direction: row; /* Change to row */
        align-items: center;
    }

    .mui-textfield label {
        margin-right: 10px; /* Optional: Add spacing between label and input */
    }

    .mui-textfield input[type="text"] {
        width: 300px; /* Adjust width as needed */
    }

    /* Color */
    .mui-textfield input[type="text"],
    .mui-textfield input[type="date"] {
        height: auto;
        background-color: transparent;
        border: none; /* Remove default border */
        border-bottom: 1px solid black; /* Add bottom border */
        padding-bottom: 5px; 
    }

    .mui-switch {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }


    .mui-switch input[type="checkbox"] {
        display: none;
    }

    .mui-slider {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        background-color: #ccc;
        border-radius: 10px;
        transition: background-color 0.3s;
    }
    
    .mui-slider:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        background-color: white;
        border-radius: 50%;
        transition: transform 0.3s;
    }

    .mui-switch input[type="checkbox"]:checked + .mui-slider {
        background-color: #2196F3;
    }

    .mui-switch input[type="checkbox"]:checked + .mui-slider:before {
        transform: translateX(20px);
    }

    .mui-checkbox {
        margin-bottom: 10px;
    }
</style>