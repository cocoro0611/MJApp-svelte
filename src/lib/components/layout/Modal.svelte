<script lang="ts">
  import { Modal } from "flowbite-svelte";
  import ButtonAction from "../ui/ButtonAction.svelte";
  export let popupModal = false;
  export let isButton: boolean = true;
</script>

{#if isButton}
  <ButtonAction variant="plus" on:click="{() => (popupModal = true)}" />
{/if}

<Modal bind:open="{popupModal}" size="lg" dismissable="{false}">
  <div class="text-center text-[1rem] font-bold">
    <slot />
  </div>
</Modal>
