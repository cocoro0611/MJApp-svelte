<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import FormField from "../layout/FormField.svelte";
  import MemberCard from "$lib/components/card/MemberCard.svelte";

  export let users: UserData[];

  let popupModal = false;

  // FIXME: 関数のリファクタリング;
  const MAX_SELECTED_USERS = 4;

  function initializeSelectedUsers(users: UserData[]): UserData[] {
    const defaultUsers = users
      .filter((user) => user.isDefault)
      .slice(0, MAX_SELECTED_USERS)
      .map((user) => ({ ...user, isDefault: true }));

    return [
      ...defaultUsers,
      ...createEmptyUsers(MAX_SELECTED_USERS - defaultUsers.length),
    ];
  }

  function createEmptyUsers(count: number): UserData[] {
    return Array(count)
      .fill(null)
      .map((_, index) => ({
        id: "",
        name: `${index + 1}`,
        icon: "",
        isDefault: false,
      }));
  }

  let selectedUsers = initializeSelectedUsers(users);
  let tempSelectedUsers = [...selectedUsers];

  function closeModal() {
    popupModal = false;
    tempSelectedUsers = [...selectedUsers];
  }

  function toggleUserSelection(user: UserData) {
    const index = tempSelectedUsers.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      tempSelectedUsers[index] = createEmptyUsers(1)[0];
    } else {
      const emptyIndex = tempSelectedUsers.findIndex((u) => u.id === "");
      if (emptyIndex !== -1) {
        tempSelectedUsers[emptyIndex] = { ...user, isDefault: true };
      }
    }
    tempSelectedUsers = [...tempSelectedUsers];
  }

  function applySelection() {
    selectedUsers = [...tempSelectedUsers];
    closeModal();
  }

  $: isFourSelected =
    tempSelectedUsers.filter((user) => user.id !== "").length ===
    MAX_SELECTED_USERS;
</script>

<FormField
  name="メンバー"
  isCustom
  on:click="{applySelection}"
  disabled="{!isFourSelected}"
  bind:popupModal
>
  <div class="flex justify-center items-center">
    <div class="grid grid-cols-4">
      {#each selectedUsers as user}
        <input type="hidden" name="userId" value="{user.id}" />
        <MemberCard
          isColor="{false}"
          image="{user.icon}"
          name="{user.name}"
          on:click
        >
          {user.name}
        </MemberCard>
      {/each}
    </div>
  </div>
  <svelte:fragment slot="contents">
    <div class="py-4">４人選択してください</div>
    <div class="mx-4 grid grid-cols-4 md:grid-cols-8">
      {#each users as user}
        <div class="flex justify-center items-center p-2">
          <MemberCard
            isSelectAction
            isSelected="{tempSelectedUsers.some((u) => u.id === user.id)}"
            size="small"
            image="{user.icon}"
            name="{user.name}"
            on:click="{() => toggleUserSelection(user)}"
          >
            {user.name}
          </MemberCard>
        </div>
      {/each}
    </div>
  </svelte:fragment>
</FormField>
