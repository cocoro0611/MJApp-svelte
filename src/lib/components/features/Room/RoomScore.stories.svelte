<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomScore from "./RoomScore.svelte";

  export const meta: Meta<RoomScore> = {
    title: "features/Room/RoomScore",
    component: RoomScore,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <RoomScore />
</Story>
