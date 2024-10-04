<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import FormField from "./FormField.svelte";

  export const meta: Meta<FormField> = {
    title: "LAYOUT/FormField",
    component: FormField,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <FormField name="タイトル">
    <form action="">何かフォーム</form>
  </FormField>
</Story>

<Story name="Custom">
  <FormField name="タイトル" isCustom>
    <form action="">何かフォーム</form>
    <svelte:fragment slot="contents">モーダルの中</svelte:fragment>
  </FormField>
</Story>
