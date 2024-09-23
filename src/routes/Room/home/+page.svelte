<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Room } from "$lib/models/interface.js";
  export let rooms: Room[];

  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import RoomSummary from "$lib/components/features/Room/RoomSummary.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  export let currentPage: "roomHome" | "roomNew" | "roomDetail" = "roomHome";

  const RoomCreatePage = () => {
    currentPage = "roomNew";
  };

  const dispatch = createEventDispatcher<{
    select: Room;
  }>();
  const handleRoomSelect = (event: CustomEvent<Room>) => {
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
