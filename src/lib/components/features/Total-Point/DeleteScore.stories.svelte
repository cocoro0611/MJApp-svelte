<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import DeleteScore from "./DeleteScore.svelte";

  export const meta: Meta<DeleteScore> = {
    title: "features/Total-Point/DeleteScore",
    component: DeleteScore,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <DeleteScore />
</Story>
