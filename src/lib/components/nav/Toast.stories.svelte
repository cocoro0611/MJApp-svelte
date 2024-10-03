<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Toast from "./Toast.svelte";

  export const meta: Meta<Toast> = {
    title: "NAV/Toast",
    component: Toast,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Toast />
</Story>
