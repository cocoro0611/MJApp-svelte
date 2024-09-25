<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointKeyboard from "./PointKeyboard.svelte";

  export const meta: Meta<PointKeyboard> = {
    title: "features/Room/PointKeyboard",
    component: PointKeyboard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { ScoreData } from "$lib/models/Room/type.js";
  let scores: ScoreData[] = [
    {
      id: "",
      score: 0,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 1,
    },
    {
      id: "",
      score: 0,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 2,
    },
    {
      id: "",
      score: 0,
      point: -20,
      chip: 0,
      roomId: "",
      userId: "",
      order: 3,
    },
    {
      id: "",
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
  <PointKeyboard
    bind:scores
    bind:isInput
    bind:activeScoreIndex
    {openKeyboard}
  />
</Story>
