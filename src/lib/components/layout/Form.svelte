<script lang="ts">
  import Icon from "$lib/components/ui/Icon.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";
  import { enhance } from "$app/forms";
  import { currentPage } from "$lib/utils/pageStore.js";
  import { removeLocalData, saveLocalData } from "$lib/utils/localStorage.js";
  import { invalidateAll } from "$app/navigation";

  export let action = "";
  export let method: "post" | "get" = "post";

  $: isCreate = action === "?/create-user" || action === "?/create-room";
  $: isUpdate = action === "?/update-user" || action === "?/update-room";
  $: isDelete = action === "?/delete-user" || action === "?/delete-room";

  let popupModal: boolean = false;
  const openModal = () => {
    popupModal = true;
  };
  const closeModal = () => {
    popupModal = false;
  };
  const formSubmitResult = () => {
    return async ({ result }: { result: any }) => {
      if (result.type === "success") {
        const data = result.data;
        if (["create-user", "update-user", "delete-user"].includes(data.type)) {
          removeLocalData("userId");
          currentPage.set("member");
        }
        if (data.type === "create-room") {
          currentPage.set("room");
        }
        if (data.type === "delete-room") {
          removeLocalData("roomId");
          currentPage.set("room");
        }
        await invalidateAll(); // ページデータを再取得
      }
    };
  };
</script>

<form {action} {method} use:enhance="{formSubmitResult}" class="px-8">
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
</form>
