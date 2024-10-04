<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomScore from "./RoomScore.svelte";

  export const meta: Meta<RoomScore> = {
    title: "features/Room/RoomScore",
    component: RoomScore,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"><RoomScore room="{sampleData.room}" /></Story>
