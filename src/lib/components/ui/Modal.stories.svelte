<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Modal from "./Modal.svelte";

  export const meta: Meta<Modal> = {
    title: "UI/Modal",
    component: Modal,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Modal>ここに何か入る</Modal>
</Story>
