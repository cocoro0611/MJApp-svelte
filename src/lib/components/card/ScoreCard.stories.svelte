<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ScoreCard from "./ScoreCard.svelte";

  export const meta: Meta<ScoreCard> = {
    title: "CARD/ScoreCard",
    component: ScoreCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default">
  <ScoreCard room="{sampleData.room}" score="{sampleData.score}" />
</Story>
