<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ScoreCard from "./ScoreCard.svelte";

  export const meta: Meta<ScoreCard> = {
    title: "CARD/ScoreCard",
    component: ScoreCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  let score: ScoreData = {
    roomId: "",
    gameCount: 1,
    userScores: [
      {
        id: "",
        input: 100,
        score: 0,
        userId: "",
        order: 1,
      },
      {
        id: "",
        input: 0,
        score: -100,
        userId: "",
        order: 1,
      },
      {
        id: "",
        input: 0,
        score: 100,
        userId: "",
        order: 1,
      },
      {
        id: "",
        input: 0,
        score: 0,
        userId: "",
        order: 1,
      },
    ],
  };
  let room: RoomData = {
    id: "",
    name: "",
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    scoreRate: 50,
    chipRate: 100,
    gameAmount: 0,
    users: [
      {
        id: "",
        name: "",
        icon: "",
        isDefault: false,
        totalScore: 0,
        totalChip: 0,
        totalPoint: 0,
      },
    ],
  };
</script>

<Story name="Default">
  <ScoreCard {room} {score} />
</Story>
