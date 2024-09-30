<script lang="ts">
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import Icon from "../ui/Icon.svelte";
  import { removeLocalData } from "$lib/utils/localStorage.js";

  type ActionType =
    | "createUser"
    | "updateUser"
    | "deleteUser"
    | "createRoom"
    | "updateRoom"
    | "deleteRoom"
    | "createScore"
    | "updateScore"
    | "createChip"
    | "";
  export let actions: ActionType = "";
  export let method: string = "";
  export let action: string = "";
  export let popupModal: boolean = false;

  const setFormAction = (actionType: ActionType) => {
    method = "POST";
    action = `?/${actionType}`;
    if (actionType === "deleteRoom") {
      removeLocalData("roomId");
    }
  };

  const closeModal = () => {
    popupModal = false;
  };

  const deleteUserModal = () => {
    popupModal = true;
  };

  const deleteRoomModal = () => {
    popupModal = true;
  };
</script>

<form {method} {action} class="{actions === 'updateScore' ? '' : 'px-8'}">
  <slot />
  {#if actions === "createUser"}
    <div class="flex justify-center py-4">
      <ButtonAction
        pattern="create"
        on:click="{() => setFormAction('createUser')}"
      />
    </div>
  {/if}
  {#if actions === "updateUser"}
    <div class="flex justify-center py-4 {popupModal ? 'gap-4' : ''}">
      {#if popupModal}
        <ButtonAction pattern="close" size="small" on:click="{closeModal}" />
      {/if}
      <ButtonAction
        pattern="update"
        size="{popupModal ? 'small' : 'normal'}"
        on:click="{() => setFormAction('updateUser')}"
      />
    </div>
  {/if}
  {#if actions === "deleteUser"}
    <Icon type="delete" on:click="{deleteUserModal}" />

    <Modal bind:popupModal isButton="{false}">
      <div class="py-4">本当に削除しますか？</div>
      <div class="flex justify-center space-x-4 py-4">
        <ButtonAction size="small" pattern="close" on:click="{closeModal}" />
        <ButtonAction
          size="small"
          pattern="delete"
          on:click="{() => setFormAction('deleteUser')}"
        />
      </div>
    </Modal>
  {/if}

  {#if actions === "createRoom"}
    <div class="flex justify-center py-4">
      <ButtonAction
        pattern="create"
        on:click="{() => setFormAction('createRoom')}"
      />
    </div>
  {/if}
  {#if actions === "updateRoom"}
    <div class="flex justify-center gap-4 my-4">
      <ButtonAction pattern="close" size="small" on:click="{closeModal}" />
      <ButtonAction
        pattern="update"
        size="small"
        on:click="{() => setFormAction('updateRoom')}"
      />
    </div>
  {/if}
  {#if actions === "deleteRoom"}
    <Icon type="delete" on:click="{deleteRoomModal}" />

    <Modal bind:popupModal isButton="{false}">
      <div class="py-4">本当に削除しますか？</div>
      <div class="flex justify-center space-x-4 py-4">
        <ButtonAction size="small" pattern="close" on:click="{closeModal}" />
        <ButtonAction
          size="small"
          pattern="delete"
          on:click="{() => setFormAction('deleteRoom')}"
        />
      </div>
    </Modal>
  {/if}
  {#if actions === "createScore"}
    <Modal isButton bind:popupModal>
      <div class="flex justify-start py-2 font-bold">
        以下のデータを追加しますか？
      </div>
      <div class="flex justify-center gap-4 pb-4">
        <ButtonAction
          on:click="{() => setFormAction('createScore')}"
          pattern="addScore"
          size="small"
        />
        <ButtonAction
          on:click="{() => setFormAction('createChip')}"
          pattern="addChip"
          size="small"
        />
      </div>
      <ButtonAction on:click="{closeModal}" pattern="close" />
    </Modal>
  {/if}
</form>
