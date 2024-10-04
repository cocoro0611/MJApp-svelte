<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomCard from "./RoomCard.svelte";

  export const meta: Meta<RoomCard> = {
    title: "CARD/RoomCard",
    component: RoomCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default">
  <RoomCard room="{sampleData.room}" /></Story
>
