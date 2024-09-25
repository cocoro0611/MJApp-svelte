<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointCard from "./PointCard.svelte";

  export const meta: Meta<PointCard> = {
    title: "features/Room/PointCard",
    component: PointCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  import type { ScoreData } from "$lib/models/Room/type.js";

  let scores: ScoreData[] = [
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 1,
    },
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 2,
    },
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: -20,
      chip: 0,
      roomId: "",
      userId: "",
      order: 3,
    },
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: 0,
      chip: 0,
      roomId: "",
      userId: "",
      order: 4,
    },
  ];
</script>

<Story name="Default">
  <PointCard {scores} />
</Story>
