<script lang="ts">
  import Icon from "$lib/components/ui/Icon.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  import { enhance } from "$app/forms";
  import { currentPage } from "$lib/utils/pageStore.js";
  import { removeLocalData } from "$lib/utils/localStorage.js";
  import { invalidateAll } from "$app/navigation";

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

  // TODO: バリデーションが出るようにしたらなおいい
  const formSubmitResult = () => {
    return async ({ result }: { result: any }) => {
      if (result.type === "success") {
        const data = result.data;
        if (["create-user", "update-user", "delete-user"].includes(data.type)) {
          removeLocalData("userId");
          currentPage.set("member");
        }
        if (
          ["create-room", "update-room", "update-room-user"].includes(data.type)
        ) {
          currentPage.set("roomDetail");
        }
        if (["create-score", "create-chip"].includes(data.type)) {
          popupModal = false;
        }
        if (["update-score", "update-chip"].includes(data.type)) {
          openKeyboard = false;
          selectedScoreId = null;
          selectedChipId = null;
        }
        if (data.type === "delete-room") {
          removeLocalData("roomId");
          currentPage.set("room");
        }
        await invalidateAll(); // ページデータを再取得
      }
    };
  };

  let popupModal: boolean = false;
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
  {#if isRoomDetail}
    <Modal bind:popupModal isButton="{false}">
      <div class="py-4">順位を選択してください</div>
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
          }}"
          >決定
        </ButtonAction>
      </div>
    </Modal>
  {/if}
</form>
