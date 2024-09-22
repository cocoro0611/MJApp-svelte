<script lang="ts">
  import { Modal } from "flowbite-svelte";
  import ButtonAction from "./ButtonAction.svelte";
  export let popupModal = false;
  export let isButton: boolean = true;
</script>

{#if isButton}
  <ButtonAction pattern="plus" on:click="{() => (popupModal = true)}" />
{/if}

<Modal bind:open="{popupModal}" size="lg" dismissable="{false}">
  <div class="text-center">
    <slot />
  </div>
</Modal>
