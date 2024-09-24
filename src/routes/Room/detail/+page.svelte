<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import type { Room, User, Score } from "$lib/models/interface.js";
  export let users: User[];
  export let scores: Score[];
  export let room: Room;

  export let currentPage: "roomHome" | "roomNew" | "roomDetail" = "roomHome";

  const backPage = () => {
    currentPage = "roomHome";
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
  <svelte:fragment slot="right">
    <RoomForm isDelete {room} {users} />
  </svelte:fragment>
  <RoomScore {room} />
</Header>

<Main></Main>
