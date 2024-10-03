<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import RoomSummary from "$lib/components/features/Room/RoomSummary.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import { currentPage } from "$lib/utils/pageStore.js";

  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData } from "$lib/models/Room/type.js";
  export let rooms: RoomData[];
  export let users: UserData[];
</script>

<Header>
  <svelte:fragment slot="center">ルーム一覧</svelte:fragment>
</Header>

<Main>
  <RoomSummary {rooms} />
</Main>

<Button
  isPlus
  on:click="{() => currentPage.set('roomNew')}"
  disabled="{users.length < 4}"
/>
