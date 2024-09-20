<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ButtonAction from "./ButtonAction.svelte";

  export const meta: Meta<ButtonAction> = {
    title: "UI/ButtonAction",
    component: ButtonAction,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <div class="p-2"><ButtonAction pattern="create" /></div>
  <div class="p-2"><ButtonAction pattern="update" /></div>
  <div class="p-2"><ButtonAction pattern="add" /></div>
  <div class="p-2"><ButtonAction pattern="delete" /></div>
  <div class="p-2"><ButtonAction pattern="deleteOnly" /></div>
</Story>
