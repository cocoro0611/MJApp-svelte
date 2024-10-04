<script lang="ts">
  import Modal from "$lib/components/nav/Modal.svelte";
  import Button from "../ui/Button.svelte";

  export let name: string;
  export let isCustom: boolean = false;

  export let disabled = false;
  export let popupModal = false;

  const modalOpen = () => {
    popupModal = true;
  };
  const modalClose = () => {
    popupModal = false;
  };
</script>

<div class="">
  <div
    class="flex font-bold py-1 text-blue-800"
    class:justify-start="{!isCustom}"
    class:justify-between="{isCustom}"
  >
    <div>{name}</div>
    {#if isCustom}
      <button
        type="button"
        class="secondary text-sm w-16 h-6 rounded-md flex justify-center items-center"
        on:click="{modalOpen}"
      >
        カスタム
      </button>
    {/if}
  </div>
  <div class=""><slot /></div>
</div>

<Modal bind:popupModal isButton="{false}">
  <slot name="contents" />
  <div class="flex justify-center gap-4 py-4">
    <Button variant="cancel" width="short" on:click="{modalClose}">
      閉じる
    </Button>
    <Button width="short" on:click {disabled}>選択</Button>
  </div>
</Modal>
