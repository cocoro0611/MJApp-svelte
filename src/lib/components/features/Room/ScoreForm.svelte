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

  let input = 0;

  let isKeyboard: boolean = false;
  const openKeyboard = () => {
    isKeyboard = true;
  };
</script>

{#if formAction === "create"}
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
  <!-- TODO:カードとインプットの紐づけ -->
  <Form actions="updateScore" {method} {action}>
    {#each scores as score}
      {#if room.id === score.roomId}
        <PointCard {score} />
      {/if}
    {/each}

    <button on:click="{openKeyboard}">キーボード</button>
    入力値：{input}
    {#if isKeyboard}
      <PointKeyboard bind:method bind:action bind:input bind:isKeyboard />
    {/if}
  </Form>
{/if}
