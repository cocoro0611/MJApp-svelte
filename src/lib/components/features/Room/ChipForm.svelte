<script lang="ts">
  import Form from "$lib/components/layout/Form.svelte";
  import PointCard from "$lib/components/ui/PointCard.svelte";

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let scores: ScoreData[];
  export let room: RoomData;

  export let action;

  let inputValues: Record<string, number> = {};
  let selectedScoreId: string | null;
  let openKeyboard: boolean = false;

  $: isCreateScore = action === "?/create-chip";
</script>

<Form {action} bind:openKeyboard bind:inputValues bind:selectedScoreId>
  <input type="hidden" name="roomId" value="{room.id}" />
  {#if !isCreateScore}
    {#each scores.filter((score) => score.roomId === room.id) as score}
      <PointCard
        {room}
        {score}
        isChip
        bind:openKeyboard
        bind:inputValues
        bind:selectedScoreId
      />
    {/each}
  {/if}
</Form>
