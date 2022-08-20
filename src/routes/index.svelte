<script lang="ts">
    import { createWidget } from '@typeform/embed'
    import '@typeform/embed/build/css/widget.css'
    import { onMount } from 'svelte';
    import { WidgetOptions } from "@typeform/embed";

    onMount(() => {
        const options = {
            container: document.querySelector('#wfw-wrapper'),
        }

        createWidget('EntZwJpF?', <WidgetOptions>options)
    });

    function goHome() {
        window.location.reload();
    }

</script>
<svelte:head>
    <title>Hunters: America's Greatest Conservationists</title>
</svelte:head>
<button on:click={goHome} class="z-40 p-4 fixed top-0 right-0">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" class="text-orange-600" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
</button>
<div id="wfw-wrapper" style="width: 100%; height: 100%; position: absolute"></div>

