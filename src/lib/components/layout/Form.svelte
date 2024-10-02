<script lang="ts">
  import Icon from "$lib/components/ui/Icon.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  import { enhance } from "$app/forms";
  import { createFormSubmitResult } from "$lib/utils/formSubmitResult.js";

  export let isActions: boolean = false;
  export let action: string = "";
  export let method: "post" | "get" = "post";

  export let selectedScoreId: string | null = null;
  export let selectedChipId: string | null = null;
  export let openKeyboard: boolean = false;

  $: isCreate = action === "?/create-user" || action === "?/create-room";
  $: isUpdate =
    action === "?/update-user" ||
    action === "?/update-room" ||
    action === "?/update-room-user";
  $: isDelete = action === "?/delete-user" || action === "?/delete-room";
  $: isRoomDetail = action === "?/update-score" || action === "?/update-chip";

  let popupModal: boolean = false;
  const setPopupModal = (value: boolean) => (popupModal = value);
  const setOpenKeyboard = (value: boolean) => (openKeyboard = value);
  const setSelectedScoreId = (value: string | null) =>
    (selectedScoreId = value);
  const setSelectedChipId = (value: string | null) => (selectedChipId = value);

  $: formSubmitResult = createFormSubmitResult({
    setPopupModal,
    setOpenKeyboard,
    setSelectedScoreId,
    setSelectedChipId,
  });

  const openModal = () => {
    popupModal = true;
  };
  const closeModal = () => {
    popupModal = false;
  };
</script>

<form
  {action}
  {method}
  use:enhance="{formSubmitResult}"
  class="{isRoomDetail ? '' : 'px-8'}"
>
  <slot />
  {#if isCreate || isUpdate}
    <div class="flex justify-center py-4">
      <ButtonAction type="submit">
        {isCreate ? "登録" : "更新"}
      </ButtonAction>
    </div>
  {/if}

  {#if isDelete}
    <button type="button" class="flex" on:click="{openModal}">
      <Icon type="delete" />
    </button>
    <Modal bind:popupModal isButton="{false}">
      <div class="py-4">本当に削除しますか？</div>
      <div class="flex justify-center gap-4 py-4">
        <ButtonAction variant="close" isLine on:click="{closeModal}">
          閉じる
        </ButtonAction>
        <ButtonAction type="submit" variant="delete" isLine>削除</ButtonAction>
      </div>
    </Modal>
  {/if}

  {#if isActions}
    <Modal bind:popupModal>
      <div class="py-4">以下の情報を追加しますか？</div>
      <div class="flex justify-center gap-4 py-4">
        <ButtonAction variant="close" isLine on:click="{closeModal}">
          閉じる
        </ButtonAction>
        <ButtonAction
          type="submit"
          variant="primary"
          isLine
          on:click="{() => {
            action = '?/create-score';
          }}">スコア</ButtonAction
        >
        <ButtonAction
          type="submit"
          variant="primary"
          isLine
          on:click="{() => {
            action = '?/create-chip';
          }}">チップ</ButtonAction
        >
      </div>
    </Modal>
  {/if}
</form>
