<script lang="ts">
  import RoomSummary from "$lib/components/features/Room/RoomSummary.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  import { createEventDispatcher } from "svelte";

  import type { PageType } from "$lib/utils/localStorage.js";
  import type { RoomData } from "$lib/models/Room/type.js";
  export let rooms: RoomData[];

  export let currentPage: PageType;

  const RoomCreatePage = () => {
    currentPage = "roomNew";
  };

  const dispatch = createEventDispatcher<{
    select: RoomData;
  }>();

  const handleRoomSelect = (event: CustomEvent<RoomData>) => {
    dispatch("select", event.detail);
  };
</script>

<Header>
  <svelte:fragment slot="center">ルーム一覧</svelte:fragment>
</Header>

<Main>
  <RoomSummary {rooms} on:select="{handleRoomSelect}" />
</Main>

<ButtonAction pattern="plus" on:click="{RoomCreatePage}" />
