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

  let selectedScoreId: string | null = null;
  $: if (selectedScoreId) {
    scores = scores.map((score) => ({
      ...score,
      userScores: score.userScores.map((userScore) =>
        userScore.id === selectedScoreId ? { ...userScore, input } : userScore
      ),
    }));
  }

  let isKeyboard: boolean = false;
  let input = 0;
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
  <Form actions="createScore">
    <input type="hidden" name="roomId" value="{room.id}" />
  </Form>
{/if}

{#if formAction === "update"}
  <Form actions="updateScore" {method} {action}>
    <input type="hidden" name="roomId" value="{room.id}" />
    {#each scores.filter((score) => score.roomId === room.id) as score}
      <PointCard
        {room}
        {score}
        bind:selectedScoreId
        on:scoreClick="{handleScoreClick}"
      />
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
