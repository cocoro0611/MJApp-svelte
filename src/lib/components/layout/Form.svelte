<script lang="ts">
  import Icon from "$lib/components/ui/Icon.svelte";
  import Modal from "$lib/components/nav/Modal.svelte";
  import Button from "$lib/components/ui/Button.svelte";

  import { enhance } from "$app/forms";
  import { createFormSubmitResult } from "$lib/utils/form-result.js";

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
      <Button type="submit">
        {isCreate ? "登録" : "更新"}
      </Button>
    </div>
  {/if}

  {#if isDelete}
    <button type="button" class="flex" on:click="{openModal}">
      <Icon iconType="delete" />
    </button>
    <Modal bind:popupModal isButton="{false}">
      <div class="py-4">本当に削除しますか？</div>
      <div class="flex justify-center gap-4 py-4">
        <Button variant="cancel" width="short" on:click="{closeModal}">
          閉じる
        </Button>
        <Button type="submit" variant="danger" width="short">削除</Button>
      </div>
    </Modal>
  {/if}

  {#if isActions}
    <Modal bind:popupModal>
      <div class="py-4">以下の情報を追加しますか？</div>
      <div class="flex justify-center gap-4 py-4">
        <Button variant="cancel" width="short" on:click="{closeModal}">
          閉じる
        </Button>
        <Button
          type="submit"
          width="short"
          on:click="{() => {
            action = '?/create-score';
          }}">スコア</Button
        >
        <Button
          type="submit"
          width="short"
          on:click="{() => {
            action = '?/create-chip';
          }}">チップ</Button
        >
      </div>
    </Modal>
  {/if}
</form>
