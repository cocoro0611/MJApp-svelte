<script lang="ts">
  import { Modal } from "flowbite-svelte";
  export let popupModal = false;
</script>

<Modal bind:open="{popupModal}" size="lg" dismissable="{false}">
  <div class="text-center text-[1rem] font-bold">
    <slot />
  </div>
</Modal>
