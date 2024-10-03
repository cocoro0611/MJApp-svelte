<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Main from "./Main.svelte";

  export const meta: Meta<Main> = {
    title: "LAYOUT/Main",
    component: Main,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Main>メインのコンテンツ</Main>
</Story>
