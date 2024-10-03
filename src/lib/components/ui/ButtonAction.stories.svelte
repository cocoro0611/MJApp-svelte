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
  <ButtonAction>登録</ButtonAction>
</Story>
