<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import { currentPage } from "$lib/utils/pageStore.js";

  import type { RoomData } from "$lib/models/Room/type.js";
  export let room: RoomData;
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon iconType="back" on:click="{() => ($currentPage = 'roomDetail')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">ルームの編集</svelte:fragment>
</Header>

<Main>
  <RoomForm action="?/update-room" {room} />
</Main>
