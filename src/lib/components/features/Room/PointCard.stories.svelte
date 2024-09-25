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
      id: "1",
      score: 0,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 1,
    },
    {
      id: "2",
      score: 0,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 2,
    },
    {
      id: "3",
      score: 0,
      point: -20,
      chip: 0,
      roomId: "",
      userId: "",
      order: 3,
    },
    {
      id: "4",
      score: 0,
      point: 0,
      chip: 0,
      roomId: "",
      userId: "",
      order: 4,
    },
  ];

  let isInput: boolean = false;
  let activeScoreIndex: number = -1;

  const openKeyboard = (index: number) => {
    activeScoreIndex = index;
    isInput = true;
  };
</script>

<Story name="Default">
  <PointCard bind:scores {openKeyboard} bind:activeScoreIndex bind:isInput />
</Story>
