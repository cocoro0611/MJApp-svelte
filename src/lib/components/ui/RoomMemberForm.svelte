<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import MemberCard from "./MemberCard.svelte";
  import Button from "./Button.svelte";
  import Modal from "../layout/Modal.svelte";
  import ButtonAction from "./ButtonAction.svelte";
  import MemberSummary from "$lib/components/features/Member/MemberSummary.svelte";

  export let users: UserData[];

  let isSelected: boolean;
  let popupModal = false;
  const openModal = () => {
    isSelected = !isSelected;
    popupModal = true;
  };
  const closeModal = () => {
    isSelected = !isSelected;
    popupModal = false;
  };
</script>

<div class="flex justify-between items-center font-bold pt-4">
  <div>メンバー</div>
  <Button isCustom bind:isSelected on:click="{openModal}">カスタム</Button>
</div>

<div class="flex justify-center">
  <div class="grid grid-cols-4">
    {#each users.slice(0, 4) as user}
      <input type="hidden" name="userId" value="{user.id}" />
      <MemberCard
        isColor="{false}"
        image="/MemberIcon/{user.icon}"
        name="{user.name}"
        on:click
      >
        {user.name}
      </MemberCard>
    {/each}
  </div>
</div>

<!-- TODO:ユーザ選択 -->
<Modal bind:popupModal isButton="{false}">
  <div class="py-4">ユーザを選択してください</div>
  <MemberSummary {users} iscustomMember />
  <div class="flex justify-center gap-4 py-4">
    <ButtonAction variant="close" isLine on:click="{closeModal}">
      閉じる
    </ButtonAction>
    <ButtonAction variant="primary" isLine>選択</ButtonAction>
  </div>
</Modal>
