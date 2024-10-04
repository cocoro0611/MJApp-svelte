<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Grid from "$lib/components/layout/Grid.svelte";
  import DetailField from "$lib/components/layout/DetailField.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import Form from "$lib/components/layout/Form.svelte";
  import ScoreForm from "$lib/components/features/Room/ScoreForm.svelte";
  import ChipForm from "$lib/components/features/Room/ChipForm.svelte";

  import { currentPage } from "$lib/utils/page-store.js";
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
    <DetailField name="場代">
      <Grid rightContentes="{room.users}">
        <svelte:fragment slot="rightContent" let:rightContent="{roomUser}">
          <div class="flex justify-center text-red-500 text-sm font-bold">
            -{room.gameAmount / 4} P
          </div>
        </svelte:fragment>
      </Grid>
    </DetailField>
  {/if}

  <DetailField name="スコア">
    <ScoreForm {scores} {room} action="?/update-score" />
  </DetailField>

  {#if chips.filter((chip) => chip.roomId === room.id).length > 0}
    <DetailField name="チップ">
      <ChipForm {chips} {room} action="?/update-chip" />
    </DetailField>
  {/if}
</Main>
