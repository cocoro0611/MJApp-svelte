<script lang="ts">
  import type { User } from "$lib/models/Member/types.js";
  export let users: User[];

  import Modal from "$lib/components/ui/Modal.svelte";
  import MemberSummary from "$lib/components/features/Member/MemberSummary.svelte";
  import MemberCreate from "$lib/components/features/Member/MemberCreate.svelte";

  let popupModal = false;
  let selectedUser: User | null = null;

  const userClick = (event: CustomEvent<User>) => {
    selectedUser = event.detail;
    popupModal = true;
  };

  const closeModal = () => {
    popupModal = false;
    selectedUser = null;
  };
</script>

<MemberSummary {users} on:userClick="{userClick}" />

<div class="fixed bottom-24 right-10 z-10">
  <Modal bind:popupModal>
    {#if selectedUser}
      <MemberCreate on:close="{closeModal}" isUpdate user="{selectedUser}" />
    {:else}
      <MemberCreate on:close="{closeModal}" />
    {/if}
  </Modal>
</div>
