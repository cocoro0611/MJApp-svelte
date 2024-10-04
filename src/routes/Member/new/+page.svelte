<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import MemberForm from "$lib/components/features/Member/MemberForm.svelte";
  import { currentPage } from "$lib/utils/page-store.js";

  import type { UserData } from "$lib/models/Member/type.js";
  let user: UserData = {
    id: "",
    name: "",
    icon: "monster01.png",
    isDefault: true,
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon iconType="back" on:click="{() => ($currentPage = 'member')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">メンバー作成</svelte:fragment>
</Header>

<Main>
  <MemberForm {user} action="?/create-user" />
</Main>
