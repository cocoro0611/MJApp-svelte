<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import { currentPage } from "$lib/utils/page-store.js";

  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[] = [
    {
      id: "",
      name: "",
      icon: "",
      isDefault: true,
    },
  ];
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon iconType="back" on:click="{() => ($currentPage = 'room')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">ルームの作成</svelte:fragment>
</Header>

<Main>
  <RoomForm {users} action="?/create-room" />
</Main>
