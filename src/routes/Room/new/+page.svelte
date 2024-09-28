<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";

  import type { PageType } from "$lib/utils/localStorage.js";
  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];

  export let currentPage: PageType;

  const backPage = () => {
    currentPage = "room";
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">ルームの作成</svelte:fragment>
</Header>

<Main>
  <RoomForm formAction="create" {users} />
</Main>
