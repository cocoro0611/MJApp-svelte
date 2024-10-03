<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import Form from "$lib/components/layout/Form.svelte";
  import ScoreForm from "$lib/components/features/Room/ScoreForm.svelte";
  import ChipForm from "$lib/components/features/Room/ChipForm.svelte";

  import { currentPage } from "$lib/utils/pageStore.js";
  import type { RoomData, ScoreData, ChipData } from "$lib/models/Room/type.js";

  export let room: RoomData;
  export let scores: ScoreData[];
  export let chips: ChipData[];

  let action: string = "";
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon iconType="back" on:click="{() => ($currentPage = 'room')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
  <svelte:fragment slot="right">
    <Form action="?/delete-room">
      <input type="hidden" name="roomId" value="{room.id}" />
    </Form>
  </svelte:fragment>
  <RoomScore {room} />
</Header>

<Main isScoreHeader>
  <Form {action} isActions>
    <input type="hidden" name="roomId" value="{room.id}" />
  </Form>
  {#if room.gameAmount !== 0}
    <div
      class="flex pl-4 pb-1 items-center font-bold text-blue-800 bg-gray-200"
    >
      場代
    </div>
    <div class="grid grid-cols-5 bg-gray-100 font-bold -mt-1">
      <div class="bg-white border-2 border-gray-300"></div>
      {#each room.users as roomUser}
        <div
          class="flex justify-center items-center bg-white border-y-2 border-r-2 border-gray-300 text-red-500 text-s"
        >
          -{room.gameAmount / 4} P
        </div>
      {/each}
    </div>
  {/if}

  {#if chips.filter((chip) => chip.roomId === room.id).length > 0 || room.gameAmount !== 0}
    <div class="flex pl-4 items-center font-bold text-blue-800 bg-gray-200">
      スコア
    </div>
  {/if}
  <ScoreForm {scores} {room} action="?/update-score" />

  {#if chips.filter((chip) => chip.roomId === room.id).length > 0}
    <div
      class="flex pl-4 pb-1 items-center font-bold text-blue-800 bg-gray-200"
    >
      チップ
    </div>
    <ChipForm {chips} {room} action="?/update-chip" />
  {/if}
</Main>
