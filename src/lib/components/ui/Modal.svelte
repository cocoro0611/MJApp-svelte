<script lang="ts">
  import { Button, Modal } from "flowbite-svelte";
  export let popupModal = false;
</script>

<Button
  class="w-14 h-14 text-2xl font-bold rounded-xl bg-blue-800 hover:bg-blue-900 text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
  on:click="{() => (popupModal = true)}"
>
  <div class="-mt-[0.2rem]">+</div>
</Button>

<Modal bind:open="{popupModal}" size="xl" dismissable="{false}">
  <div class="text-center">
    <div class="mb-4"><slot /></div>
  </div>
</Modal>
