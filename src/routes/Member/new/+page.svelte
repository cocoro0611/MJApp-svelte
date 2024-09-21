<script lang="ts">
  import type { User } from "$lib/models/interface.js";
  export let users: User[];

  import Header from "$lib/components/ui/Header.svelte";
  import Main from "$lib/components/ui/Main.svelte";
  import MemberCreate from "$lib/components/features/Member/MemberCreate.svelte";
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
</script>

<Header>
  <svelte:fragment slot="center">メンバー作成</svelte:fragment>
</Header>

<Main>
  <MemberCreate />
</Main>

<!-- <div class="fixed bottom-24 right-10 z-10">
  <Modal bind:popupModal>
    {#if selectedUser}
      <MemberCreate on:close="{closeModal}" isUpdate user="{selectedUser}" />
    {:else}
      <MemberCreate on:close="{closeModal}" />
    {/if}
  </Modal>
</div> -->
