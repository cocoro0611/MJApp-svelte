<script lang="ts">
  import Icon from "$lib/components/ui/Icon.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  export let action = "";
  export let method: "post" | "get" = "post";

  $: isCreate = action === "?/create-user";
  $: isUpdate = action === "?/update-user";
  $: isDelete = action === "?/delete-user";

  let popupModal: boolean = false;
  const openModal = () => {
    popupModal = true;
  };
  const closeModal = () => {
    popupModal = false;
  };
</script>

<form {action} {method} class="px-8">
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
