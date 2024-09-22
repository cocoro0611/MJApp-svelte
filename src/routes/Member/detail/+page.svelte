<script lang="ts">
  import Header from "$lib/components/ui/Header.svelte";
  import Main from "$lib/components/ui/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import MemberCreate from "$lib/components/features/Member/MemberCreate.svelte";
  import type { User } from "$lib/models/interface.js";
  export let user: User;

  export let currentPage: "memberHome" | "memberNew" | "memberDetail";

  const backPage = () => {
    currentPage = "memberHome";
  };

  const deleteUser = () => {};
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">メンバー情報</svelte:fragment>
  <svelte:fragment slot="right">
    <Icon type="delete" on:click="{deleteUser}" />
  </svelte:fragment>
</Header>

<Main>
  <MemberCreate isUpdate {user} />
</Main>
