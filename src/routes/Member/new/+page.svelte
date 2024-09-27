<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import MemberForm from "$lib/components/features/Member/MemberForm.svelte";
  import type { UserData } from "$lib/models/Member/type.js";
  let user: UserData = {
    id: "",
    name: "",
    icon: "monster01.png",
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
  <MemberForm {user} />
</Main>
