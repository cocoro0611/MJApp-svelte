<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { RoomData } from "$lib/models/Room/type.js";
  export let rooms: RoomData[];

  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import RoomSummary from "$lib/components/features/Room/RoomSummary.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  export let currentPage: "roomHome" | "roomNew" | "roomDetail" = "roomHome";

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
