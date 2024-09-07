<script lang="ts">
  import type { User } from "$lib/models/Member/types.js";
  export let users: User[];

  import Modal from "$lib/components/ui/Modal.svelte";
  import MemberSummary from "$lib/components/features/Member/MemberSummary.svelte";
  import MemberCreate from "$lib/components/features/Member/MemberCreate.svelte";

  let popupModal = false;

  const closeModal = () => {
    popupModal = false;
  };
</script>

<MemberSummary {users} />

<div class="fixed bottom-24 right-10 z-10">
  <Modal bind:popupModal>
    <MemberCreate on:close="{closeModal}" />
  </Modal>
</div>
