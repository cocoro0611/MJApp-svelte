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
  <FormField name="aa">
    <form action="">何かフォーム</form>
  </FormField>
</Story>
