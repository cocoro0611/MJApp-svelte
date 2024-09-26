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

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];
  export let room: RoomData;
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
  <PointCard
    bind:score
    openKeyboard="{(playerIndex) => openKeyboard(gameIndex, playerIndex)}"
    isActiveGame="{gameIndex === activeGameIndex}"
    activeScoreIndex="{gameIndex === activeGameIndex ? activeScoreIndex : -1}"
    {isInput}
  />
</Story>
