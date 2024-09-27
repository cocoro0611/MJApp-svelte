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
      roomId: "room123",
      gamesNumber: 1,
      playerScores: [
        {
          userId: "user1",
          score: 250,
          chip: 10,
          point: 50,
          order: 1,
        },
        {
          userId: "user2",
          score: 230,
          chip: 5,
          point: 30,
          order: 2,
        },
        {
          userId: "user3",
          score: 270,
          chip: 15,
          point: 70,
          order: 3,
        },
        {
          userId: "user4",
          score: 250,
          chip: 10,
          point: 50,
          order: 4,
        },
      ],
    },
    {
      roomId: "room123",
      gamesNumber: 2,
      playerScores: [
        {
          userId: "user1",
          score: 0,
          chip: 10,
          point: 50,
          order: 1,
        },
        {
          userId: "user2",
          score: 0,
          chip: 5,
          point: 30,
          order: 2,
        },
        {
          userId: "user3",
          score: 0,
          chip: 15,
          point: 70,
          order: 3,
        },
        {
          userId: "user4",
          score: 0,
          chip: 10,
          point: 50,
          order: 4,
        },
      ],
    },
  ];

  let isInput: boolean = false;
  let activeScoreIndex: number = -1;
  let activeGameIndex: number = -1;

  const openKeyboard = (gameIndex: number, playerIndex: number) => {
    activeGameIndex = gameIndex;
    activeScoreIndex = playerIndex;
    isInput = true;
  };
</script>

<Story name="Default">
  <PointKeyboard
    bind:scores
    bind:isInput
    gameIndex="{activeGameIndex}"
    playerIndex="{activeScoreIndex}"
    openKeyboard="{(gameIndex, playerIndex) =>
      openKeyboard(gameIndex, playerIndex)}"
  />
</Story>
