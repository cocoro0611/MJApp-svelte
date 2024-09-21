<script lang="ts">
  import type { User } from "$lib/models/interface.js";
  export let users: User[];

  import Header from "$lib/components/ui/Header.svelte";
  import Main from "$lib/components/ui/Main.svelte";
  import MemberSummary from "$lib/components/features/Member/MemberSummary.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let currentPage: "memberHome" | "memberNew" | "memberDetail";

  // let popupModal = false;
  // let selectedUser: User | null = null;

  // const handleUserClick = (user: User) => {
  //   dispatch("userClick", user);
  // };

  // const closeModal = () => {
  //   popupModal = false;
  //   selectedUser = null;
  // };

  const MemberCreate = () => {
    currentPage = "memberNew";
  };
</script>

<Header>
  <svelte:fragment slot="center">メンバー一覧</svelte:fragment>
</Header>

<Main>
  <MemberSummary {users} />
</Main>

<ButtonAction pattern="plus" on:click="{MemberCreate}" />
