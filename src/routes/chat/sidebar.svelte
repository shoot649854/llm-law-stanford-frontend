<script>
    import { onMount } from 'svelte';
    
    let context = null;
    let nodesToDestroy = [];
    let pendingUpdate = false;

    function destroyAnyNodes() {
        // destroy current view template refs before rendering again
        nodesToDestroy.forEach((el) => el.remove());
        nodesToDestroy = [];
    }

    function update() {
    if (pendingUpdate === true) {
      return;
    }
    pendingUpdate = true;

    // The following code will now run only in the browser
    document.querySelectorAll("[data-el='div-1']").forEach((el) => {
      el.setAttribute("scriptsClientOnly", true);
    });

    destroyAnyNodes();

    pendingUpdate = false;
  }

  onMount(() => {
    update();
  });
</script>

<div class="container">
<div class="sidebar">

    <div class="header-title">
    <span class="text-white">AIVA CHATBOT</span>
    </div>
    <div class="flex gap-2 px-8 py-5 mt-20 bg-stone-700 rounded-[40px] max-md:px-5 max-md:mt-10">
    <div class="flex-auto my-auto">New Chat</div>
    </div>
    <div class="mt-11 text-sm uppercase text-stone-400 max-md:mt-10">
    Yesterday
    </div>
    <div class="flex gap-5 justify-between mt-4 whitespace-nowrap">
    <div class="flex gap-4 my-auto">
        <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a46fda979c87e09285cf24f7bf8f4f403e3d7152ca31eefb54cfacf69bd279?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
        /> -->
        <div class="flex-auto text-ellipsis">Platform Marketplace 101</div>
    </div>
    <div
        class="shrink-0 backdrop-blur-[1px] bg-stone-700 bg-opacity-0 h-[29px] rounded-[70px] w-[35px]"
    ></div>
    </div>
    <div class="flex gap-4 py-1.5 mt-5 whitespace-nowrap">
    <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a46fda979c87e09285cf24f7bf8f4f403e3d7152ca31eefb54cfacf69bd279?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
    /> -->
    <div class="flex-auto text-ellipsis">
        Give me a proposal for company name
    </div>
    </div>
    <div class="flex gap-4 py-1.5 mt-5 whitespace-nowrap">
    <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a46fda979c87e09285cf24f7bf8f4f403e3d7152ca31eefb54cfacf69bd279?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
    /> -->
    <div class="flex-auto text-ellipsis">
        Can you write a short paragraph for
    </div>
    </div>
    <div class="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
    <div class="flex gap-4 my-auto">
        <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a46fda979c87e09285cf24f7bf8f4f403e3d7152ca31eefb54cfacf69bd279?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
        /> -->
        <div class="flex-auto my-auto text-ellipsis">Reasearch about ui ux</div>
    </div>
    <div
        class="shrink-0 backdrop-blur-[1px] bg-stone-700 bg-opacity-0 h-[29px] rounded-[70px] w-[35px]"
    ></div>
    </div>
    <div class="mt-9 text-sm uppercase text-stone-400">Last week</div>
    <div class="flex gap-5 justify-between mt-4 whitespace-nowrap">
    <div class="flex gap-4 my-auto">
        <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e40022166bf18a2dffc901796f27743c7d50909b2fdfee8fe8a94bf22b13c7d?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
        /> -->
        <div class="flex-auto text-ellipsis">Platform Marketplace 101</div>
    </div>
    <div
        class="shrink-0 backdrop-blur-[1px] bg-stone-700 bg-opacity-0 h-[29px] rounded-[70px] w-[35px]"
    ></div>
    </div>
    <div class="flex gap-4 py-1.5 mt-5 whitespace-nowrap">
    <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e40022166bf18a2dffc901796f27743c7d50909b2fdfee8fe8a94bf22b13c7d?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
    /> -->
    <div class="flex-auto text-ellipsis">
        Give me a proposal for company name
    </div>
    </div>
    <div class="mt-9 text-sm uppercase text-stone-400">Last Month</div>
    <div class="flex gap-5 justify-between mt-4 whitespace-nowrap">
    <div class="flex gap-4 my-auto">
        <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e40022166bf18a2dffc901796f27743c7d50909b2fdfee8fe8a94bf22b13c7d?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
        /> -->
        <div class="flex-auto text-ellipsis">Platform Marketplace 101</div>
    </div>
    <div
        class="shrink-0 backdrop-blur-[1px] bg-stone-700 bg-opacity-0 h-[29px] rounded-[70px] w-[35px]"
    ></div>
    </div>
    <div class="flex gap-4 py-1.5 mt-2.5 whitespace-nowrap">
    <!-- <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e40022166bf18a2dffc901796f27743c7d50909b2fdfee8fe8a94bf22b13c7d?apiKey=13fe77e3ddcf48e6857571b41ec4c36e&"
        class="shrink-0 w-6 aspect-[1.27] fill-white"
    /> -->
    <div class="flex-auto text-ellipsis">
        Give me a proposal for company name
    </div>
    </div>
    <div
    code="<p>Hello there, I am custom HTML code!</p>\n"
    class="box-border flex relative flex-col shrink-0 mt-5"
    data-el="div-1"
    >
    <div><p>Hello there, I am custom HTML code!</p></div>
    </div>
    <!-- <div class="flex gap-2.5 justify-center px-8 py-5 mt-80 text-sm font-semibold leading-4 bg-orange-100 rounded-[45px] text-stone-700 max-md:px-5 max-md:mt-10" >
        <div>Upgrade to Plus</div>
    </div> -->
</div>
</div>

<style>
    .header-title {
        align-self: flex-start; /* corresponds to 'self-start' */
        margin-left: 1.5rem; /* corresponds to 'ml-6', assuming 1rem = 4 */
        font-size: 1.5em; /* corresponds to 'text-2xl' */
        font-weight: bold; /* corresponds to 'font-bold' */
    }

    .sidebar {
        background-color: #435334;
        width: 400px;
        height: 1090px;
    }

</style>