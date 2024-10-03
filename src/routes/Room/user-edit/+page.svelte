<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import MemberForm from "$lib/components/features/Member/MemberForm.svelte";

  import { currentPage } from "$lib/utils/pageStore.js";
  import type { UserData } from "$lib/models/Member/type.js";

  export let user: UserData;
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon iconType="back" on:click="{() => ($currentPage = 'roomDetail')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">メンバー編集</svelte:fragment>
</Header>

<Main>
  <MemberForm action="?/update-room-user" {user} />
</Main>
