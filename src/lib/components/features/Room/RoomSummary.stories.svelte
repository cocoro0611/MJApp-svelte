<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomSummary from "./RoomSummary.svelte";

  export const meta: Meta<RoomSummary> = {
    title: "features/Room/RoomSummary",
    component: RoomSummary,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"><RoomSummary rooms="{sampleData.rooms}" /></Story>
