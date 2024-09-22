<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { User } from "$lib/models/interface.js";
  export let users: User[];

  import Header from "$lib/components/ui/Header.svelte";
  import Main from "$lib/components/ui/Main.svelte";
  import MemberSummary from "$lib/components/features/Member/MemberSummary.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  export let currentPage: "memberHome" | "memberNew" | "memberDetail";

  const MemberCreatePage = () => {
    currentPage = "memberNew";
  };

  const dispatch = createEventDispatcher<{
    select: User;
  }>();
  const handleUserSelect = (event: CustomEvent<User>) => {
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
