<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ScoreCard from "./ScoreCard.svelte";

  export const meta: Meta<ScoreCard> = {
    title: "UI/ScoreCard",
    component: ScoreCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { Room } from "$lib/models/Total-Point/types.js";
  let room: Room = {
    id: "aa",
    name: "部屋名",
    users: [
      { id: "", name: "井上", icon: "monster01.png" },
      { id: "", name: "山本", icon: "monster02.png" },
      { id: "", name: "太郎", icon: "monster03.png" },
      { id: "", name: "太郎", icon: "monster04.png" },
    ],
  };
</script>

<Story name="Default">
  <ScoreCard {room} />
</Story>
