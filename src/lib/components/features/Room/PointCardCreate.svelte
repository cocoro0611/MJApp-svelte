<script lang="ts">
  import Modal from "$lib/components/layout/Modal.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let scores: ScoreData[];
  export let room: RoomData;

  export let method: string = "";
  export let action: string = "";
  const createScore = () => {
    method = "POST";
    action = "?/createScore";
  };

  let popupModal = false;
  const closeModal = () => {
    popupModal = false;
  };
</script>

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

<Modal isButton bind:popupModal>
  <div class="flex justify-center gap-4">
    <ButtonAction on:click="{closeModal}" pattern="close" size="small" />
    <ButtonAction on:click="{createScore}" pattern="add" size="small" />
  </div>
</Modal>
