<script lang="ts">
  import MemberForm from "$lib/components/features/Member/MemberForm.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";

  import type { PageType } from "$lib/utils/localStorage.js";
  import type { UserData } from "$lib/models/Member/type.js";

  export let user: UserData;
  export let currentPage: PageType;

  const backPage = () => {
    currentPage = "member";
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">メンバー情報</svelte:fragment>
  <svelte:fragment slot="right">
    <MemberForm formAction="delete" {user} />
  </svelte:fragment>
</Header>

<Main>
  <MemberForm formAction="update" {user} />
</Main>
