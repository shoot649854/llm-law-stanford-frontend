<script>
    import { ButtonComponent } from './button';
    export let userInfo = '';
    export let isButtonDisabled = false;
</script>


<div class="button-st">
    <button on:click={() => ButtonComponent(userInfo)} disabled={isButtonDisabled}> > </button>
</div>


<style>
    .button-st {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Aligns items to the start of the flex container, effectively left-aligning them */
  }

  .button-st button {
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

  button:disabled {
      background-color: gray;
      cursor: not-allowed;
  }
</style>