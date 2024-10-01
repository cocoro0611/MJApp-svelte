<script lang="ts">
  import Form from "$lib/components/layout/Form.svelte";
  import PointCard from "$lib/components/ui/PointCard.svelte";

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let scores: ScoreData[];
  export let room: RoomData;

  export let action;

  let input = 0;
  let isKeyboard: boolean = false;
  let selectedScore: string | null;

  $: isCreateScore = action === "?/create-score";
</script>

<Form {action} bind:isKeyboard bind:input bind:selectedScore>
  <input type="hidden" name="roomId" value="{room.id}" />
  {#if !isCreateScore}
    {#each scores.filter((score) => score.roomId === room.id) as score}
      <PointCard {room} {score} bind:isKeyboard bind:input bind:selectedScore />
    {/each}
  {/if}
</Form>
