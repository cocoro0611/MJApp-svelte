<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Modal from "./Modal.svelte";

  export const meta: Meta<Modal> = {
    title: "NAV/Modal",
    component: Modal,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import Button from "../ui/Button.svelte";

  let popupModal = false;
  const modalOpen = () => {
    popupModal = true;
  };
  const modalClose = () => {
    popupModal = false;
  };
</script>

<Story name="Default">
  <Button on:click="{modalOpen}">モーダルボタン</Button>
  <Modal bind:popupModal>
    <Button variant="cancel" on:click="{modalClose}">閉じる</Button>
  </Modal>
</Story>
