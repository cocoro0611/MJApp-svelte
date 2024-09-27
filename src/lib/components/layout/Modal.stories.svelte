<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Modal from "./Modal.svelte";

  export const meta: Meta<Modal> = {
    title: "LAYOUT/Modal",
    component: Modal,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let popupModal = false;
  const ModalButton = () => {
    popupModal = true;
  };
  const ModalClose = () => {
    popupModal = false;
  };
</script>

<Story name="Default">
  <button class="bg-blue-500 p-4" on:click="{ModalButton}">
    モーダルボタン
  </button>
  <Modal bind:popupModal isButton="{false}">
    ここに何か入る
    <button class="bg-gray-500 p-4" on:click="{ModalClose}"> 閉じる </button>
  </Modal>

  <Modal bind:popupModal>
    ここに何か入る
    <button class="bg-gray-500 p-4 text-white" on:click="{ModalClose}">
      閉じる
    </button>
  </Modal>
</Story>
