<script>
    import { formatName } from "./userInput/formatName";
    import { name } from "../component/store";
    import NextButton from "../component/Button/nextButton.svelte";
    import PdfInput from "../component/Input/PDF_Input.svelte";
	let DirPath = 'chat';
    let birthDate = '';
    let switch1 = false;
    let switch2 = false;
    let checkbox1 = false;
    let checkbox2 = false;
    let checkbox3 = false;
    let firstName = '';
    let lastName = '';
    let universityName = ''; // Declare universityName variable
    let registerEmail = '';
    let academicLevel = '';
    let thesisSubmissionDate = '';
    let programEndDate = '';
    let isSTEMQualified = '';
    let appliedToOPT = '';
    let gotEAD = '';
    let futureSteps = [];

    $: if (firstName || lastName) {
        name.set(formatName(firstName, lastName));
    }

    $: isButtonDisabled = !firstName || !lastName || !universityName || 
                          !(academicLevel ) || 
                          !(programEndDate ) ||
						  !(appliedToOPT );
</script>

<svelte:head>
    <title>Info</title>
    <meta name="Info" content="Information input" />
</svelte:head>

<div class="app">
    <main>
        <div class="mui-textfield">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" bind:value={firstName}>
        </div>
        <div class="mui-textfield">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" bind:value={lastName}>
        </div>
        <div class="mui-textfield">
            <label for="universityName">University/College Name:</label>
            <input type="text" id="universityName" bind:value={universityName}>
        </div>
        <div class="mui-textfield">
            <label for="registerEmail">Register email with us:</label>
            <input type="email" id="registerEmail" bind:value={registerEmail}>
        </div>
        <div class="mui-textfield">
            <label for="academicLevel">Which level of academic programs are you graduating from?</label>
            <select id="academicLevel" bind:value={academicLevel}>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Master">Master</option>
                <option value="Doctoral">Doctoral</option>
            </select>
        </div>
        {#if academicLevel === 'Doctoral' || academicLevel === 'Master'}
            <div class="mui-textfield">
                <label for="thesisSubmissionDate">Thesis/Dissertation Submission Date:</label>
                <input type="date" id="thesisSubmissionDate" bind:value={thesisSubmissionDate}>
            </div>
        {/if}
        <div class="mui-textfield">
            <label for="programEndDate">Program's End Date:</label>
            <input type="date" id="programEndDate" bind:value={programEndDate}>
        </div>
        <div class="mui-textfield">
            <label for="isSTEMQualified">Is your program qualified for STEM?</label>
            <select id="isSTEMQualified" bind:value={isSTEMQualified}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div class="mui-textfield">
            <label for="appliedToOPT">Have you applied to OPT?</label>
            <select id="appliedToOPT" bind:value={appliedToOPT}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        {#if appliedToOPT === 'Yes'}
            <div class="mui-textfield">
                <label for="gotEAD">Have you got your EAD card?</label>
                <select id="gotEAD" bind:value={gotEAD}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        {/if}
        {#if gotEAD === 'Yes'}
            <div class="mui-textfield">
                <label for="futureSteps">What are future steps you’d like me to assist you with in the OPT journey?</label>
                <select id="futureSteps" multiple bind:value={futureSteps}>
                    <option value="Apply for OPT">Apply for OPT</option>
                    <option value="Apply for OPT Extension">Apply for OPT Extension</option>
                    <option value="Layoff Risk Management">Layoff Risk Management</option>
                    <option value="H1B/Green Card Application">H1B/Green Card Application</option>
                </select>
            </div>
        {/if}

        <PdfInput></PdfInput>
        <NextButton userInfo={DirPath} {isButtonDisabled} />
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
        background-color: rgba(0.1, 0.1, 0.1, 0.1); 
	}

    .mui-textfield {
        margin-bottom: 20px;
        height: auto;
        display: flex;
        flex-direction: row; /* Change to row */
        align-items: center;
    }

    .mui-textfield label {
        margin-right: 10px; 
        font-size: 20px;
        font-family: sans-serif;
    }

    .mui-textfield input[type="text"] {
        width: 300px; /* Adjust width as needed */
    }

    /* Color */
    .mui-textfield input[type="text"],
    .mui-textfield input[type="date"],
    .mui-textfield input[type="email"]{
        height: auto;
        background-color: transparent;
        border: none; /* Remove default border */
        border-bottom: 1px solid black; /* Add bottom border */
        padding-bottom: 5px; 
    }

    /* BOX */
    select,
    select option {
    color: black; /* Set text color */
    background-color: white; /* Set background color */
  }


</style>