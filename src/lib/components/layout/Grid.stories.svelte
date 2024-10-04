<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Grid from "./Grid.svelte";

  export const meta: Meta<Grid> = {
    title: "LAYOUT/Grid",
    component: Grid,
  };
</script>

<script lang="ts" generics="T">
  import { Story } from "@storybook/addon-svelte-csf";

  import CountCard from "../card/CountCard.svelte";
  import InputCard from "../card/InputCard.svelte";
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

  let inputValues: Record<string, number> = {};
  let selectedScoreId: string | null = null;
  let scoreClick: (score: ScoreData, scoreId: string) => void = () => {};

  let initialTotalPoint: number = room.initialPoint * 4;
  $: totalPoint =
    initialTotalPoint -
    score.userScores.reduce((sum, userScore) => {
      const input = inputValues[userScore.id] ?? userScore.input ?? 0;
      return sum + input * 100;
    }, 0);

  function handleScoreClick(scoreId: string) {
    scoreClick(score, scoreId);
  }
</script>

<Story name="Default">
  <Grid
    firstContent="{score.gameCount === 1}"
    rightContentes="{score.userScores}"
  >
    <svelte:fragment slot="leftContent">
      <CountCard totalValue="{totalPoint}" count="{score.gameCount}" />
    </svelte:fragment>

    <svelte:fragment slot="rightContent" let:rightContent="{userScore}">
      <InputCard
        type="button"
        inputType="score"
        isSelected="{selectedScoreId === userScore.id}"
        inputValue="{inputValues[userScore.id] ?? userScore.input ?? 0}"
        on:click="{() => handleScoreClick(userScore.id)}"
      />
      <div
        class="flex justify-center text-sm font-bold"
        class:text-blue-500="{userScore.score >= 0}"
        class:text-red-500="{userScore.score < 0}"
      >
        {userScore.score}
      </div>
    </svelte:fragment>
  </Grid>
</Story>
