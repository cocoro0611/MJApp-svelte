<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import MemberForm from "$lib/components/features/Member/MemberForm.svelte";

  import type { PageType } from "$lib/utils/localStorage.js";
  import type { UserData } from "$lib/models/Member/type.js";
  export let currentPage: PageType;

  let user: UserData = {
    id: "",
    name: "",
    icon: "monster01.png",
  };

  const backPage = () => {
    currentPage = "member";
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">メンバー作成</svelte:fragment>
</Header>

<Main>
  <MemberForm formAction="create" {user} />
</Main>
