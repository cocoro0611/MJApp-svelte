<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import MemberCard from "$lib/components/card/MemberCard.svelte";
  import ButtonSelect from "../ui/ButtonSelect.svelte";
  import Modal from "$lib/components/nav/Modal.svelte";
  import Button from "../ui/Button.svelte";

  export let users: UserData[];

  let isSelected: boolean;
  let popupModal = false;

  // FIXME:関数の整理

  // Initialize default selected users
  let selectedUsers: UserData[] = users
    .filter((user) => user.isDefault)
    .slice(0, 4)
    .map((user) => ({ ...user, isDefault: true }));

  // Fill empty slots
  while (selectedUsers.length < 4) {
    selectedUsers.push({
      id: "",
      name: `${selectedUsers.length + 1}`,
      icon: "",
      isDefault: false,
    });
  }

  let tempSelectedUsers: UserData[] = [...selectedUsers];

  const openModal = () => {
    isSelected = !isSelected;
    popupModal = true;
  };

  const closeModal = () => {
    isSelected = !isSelected;
    popupModal = false;
    tempSelectedUsers = [...selectedUsers]; // Reset
  };

  function toggleUserSelection(user: UserData) {
    const index = tempSelectedUsers.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      // Deselect user if already selected
      tempSelectedUsers[index] = {
        id: "",
        name: `${index + 1}`,
        icon: "",
        isDefault: false,
      };
    } else {
      // Select user if not selected
      const emptyIndex = tempSelectedUsers.findIndex((u) => u.id === "");
      if (emptyIndex !== -1) {
        tempSelectedUsers[emptyIndex] = { ...user, isDefault: true };
      }
    }
    tempSelectedUsers = [...tempSelectedUsers]; // Trigger update
  }

  function applySelection() {
    selectedUsers = [...tempSelectedUsers];
    closeModal();
  }

  // Function to check if exactly 4 users are selected
  $: isFourSelected =
    tempSelectedUsers.filter((user) => user.id !== "").length === 4;
</script>

<div class="flex justify-between items-center font-bold pt-4">
  <div>メンバー</div>
  <ButtonSelect width="short" bind:isSelected on:click="{openModal}"
    >カスタム</ButtonSelect
  >
</div>

<div class="flex justify-center">
  <div class="grid grid-cols-4">
    {#each selectedUsers as user}
      <input type="hidden" name="userId" value="{user.id}" />
      <MemberCard
        isColor="{false}"
        image="{user.id ? `/MemberIcon/${user.icon}` : ''}"
        name="{user.name}"
        on:click
      >
        {user.name}
      </MemberCard>
    {/each}
  </div>
</div>

<Modal bind:popupModal isButton="{false}">
  <div class="py-4">ユーザを選択してください（最大4人）</div>
  <div class="mx-4 grid grid-cols-4 md:grid-cols-6">
    {#each users as user}
      <div class="flex justify-center p-1">
        <button
          type="button"
          class="flex flex-col justify-center items-center
          h-16 w-16
          rounded border border-blue-500 text-blue-800
          {tempSelectedUsers.some((u) => u.id === user.id)
            ? 'bg-blue-300'
            : ''}"
          on:click="{() => toggleUserSelection(user)}"
        >
          <img
            class="h-10 w-10"
            src="/MemberIcon/{user.icon}"
            alt="MemberIcon"
          />
          <div>{user.name}</div>
        </button>
      </div>
    {/each}
  </div>
  <div class="flex justify-center gap-4 py-4">
    <Button variant="cancel" width="short" on:click="{closeModal}">
      閉じる
    </Button>
    <Button
      width="short"
      on:click="{applySelection}"
      disabled="{!isFourSelected}"
    >
      選択
    </Button>
  </div>
</Modal>
