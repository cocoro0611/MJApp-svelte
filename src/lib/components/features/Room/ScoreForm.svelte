<script lang="ts">
  import PointCard from "$lib/components/ui/PointCard.svelte";
  import PointKeyboard from "$lib/components/ui/PointKeyboard.svelte";
  import Form from "$lib/components/layout/Form.svelte";

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let scores: ScoreData[];
  export let room: RoomData;

  export let formAction: "create" | "update";

  let method: string = "";
  let action: string = "";

  let isKeyboard: boolean = false;
  let input = 0;

  let selectedScoreId: string | null = null;

  // リアクティブな宣言を追加
  $: if (selectedScoreId) {
    scores = scores.map((score) => ({
      ...score,
      userScores: score.userScores.map((userScore) =>
        userScore.id === selectedScoreId ? { ...userScore, input } : userScore
      ),
    }));
  }

  function handleScoreClick(
    event: CustomEvent<{ scoreId: string; input: number }>
  ) {
    const { scoreId, input: clickedInput } = event.detail;
    selectedScoreId = scoreId;
    input = clickedInput;
    isKeyboard = true;
  }
</script>

{#if formAction === "create"}
  <!-- TODO:チップの追加 -->
  <Form actions="createScore">
    <input type="hidden" name="roomId" value="{room.id}" />
    <input
      type="hidden"
      name="gameCount"
      value="{Math.max(
        ...scores
          .filter((score) => score.roomId === room.id)
          .map((score) => score.gameCount)
      ) + 1}"
    />
    {#each room.users as user}
      <input type="hidden" name="userId" value="{user.id}" />
    {/each}
  </Form>
{/if}

{#if formAction === "update"}
  <Form actions="updateScore" {method} {action}>
    <input type="hidden" name="roomId" value="{room.id}" />
    <input type="hidden" name="initialPoint" value="{room.initialPoint}" />
    <input type="hidden" name="returnPoint" value="{room.returnPoint}" />
    <input type="hidden" name="bonusPoint" value="{room.bonusPoint}" />
    {#each scores as score}
      {#if room.id === score.roomId}
        <input type="hidden" name="gameCount[]" value="{score.gameCount}" />
        {#each score.userScores as userScore}
          <input type="hidden" name="id[]" value="{userScore.id}" />
          <input type="hidden" name="input[]" value="{userScore.input}" />
        {/each}
        <PointCard
          {room}
          {score}
          bind:selectedScoreId
          on:scoreClick="{handleScoreClick}"
        />
      {/if}
    {/each}
    {#if isKeyboard}
      <PointKeyboard
        bind:method
        bind:action
        bind:input
        bind:isKeyboard
        bind:selectedScoreId
      />
    {/if}
  </Form>
{/if}
