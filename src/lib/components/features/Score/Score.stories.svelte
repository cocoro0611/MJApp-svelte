<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Score from "./Score.svelte";

  export const meta: Meta<Score> = {
    title: "features/Score/Score",
    component: Score,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Score />
</Story>
