<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomScoreBord from "./RoomScoreBord.svelte";

  export const meta: Meta<RoomScoreBord> = {
    title: "UI/RoomScoreBord",
    component: RoomScoreBord,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <RoomScoreBord />
</Story>
