<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import AddScore from "./AddScore.svelte";

  export const meta: Meta<AddScore> = {
    title: "features/Score/AddScore",
    component: AddScore,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <AddScore />
</Story>
