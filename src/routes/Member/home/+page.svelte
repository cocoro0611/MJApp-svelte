<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import MemberSummary from "$lib/components/features/Member/MemberSummary.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  import { createEventDispatcher } from "svelte";

  import type { PageType } from "$lib/utils/localStorage.js";
  import type { UserData } from "$lib/models/Member/type.js";

  export let users: UserData[];
  export let currentPage: PageType;

  const MemberCreatePage = () => {
    currentPage = "memberNew";
  };

  const dispatch = createEventDispatcher<{
    select: UserData;
  }>();

  const handleUserSelect = (event: CustomEvent<UserData>) => {
    dispatch("select", event.detail);
  };
</script>

<Header>
  <svelte:fragment slot="center">メンバー一覧</svelte:fragment>
</Header>

<Main>
  <MemberSummary {users} on:select="{handleUserSelect}" />
</Main>

<ButtonAction pattern="plus" on:click="{MemberCreatePage}" />
