<script lang="ts">
  import Header from "$lib/components/ui/Header.svelte";
  import Main from "$lib/components/ui/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import MemberCreate from "$lib/components/features/Member/MemberCreate.svelte";
  import type { User } from "$lib/models/interface.js";
  let user: User = {
    id: "",
    name: "",
    icon: "monster01.png",
    createdAt: "",
  };

  export let currentPage: "memberHome" | "memberNew" | "memberDetail";

  const backPage = () => {
    currentPage = "memberHome";
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">メンバー作成</svelte:fragment>
</Header>

<Main>
  <MemberCreate {user} />
</Main>
