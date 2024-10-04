<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ChipCard from "./ChipCard.svelte";

  export const meta: Meta<ChipCard> = {
    title: "CARD/ChipCard",
    component: ChipCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default">
  <ChipCard room="{sampleData.room}" chip="{sampleData.chip}" />
</Story>
