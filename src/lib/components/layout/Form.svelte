<script lang="ts">
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import Icon from "../ui/Icon.svelte";
  export let actions:
    | "createUser"
    | "updateUser"
    | "deleteUser"
    | "createRoom"
    | "updateRoom"
    | "deleteRoom"
    | "createScore"
    | "updateScore"
    | "" = "";

  import { saveLocalData, removeLocalData } from "$lib/utils/localStorage.js";

  let popupModal = false;

  export let method: string = "";
  export let action: string = "";

  const createUser = () => {
    method = "POST";
    action = "?/createUser";
  };

  const updateUser = () => {
    method = "POST";
    action = "?/updateUser";
  };

  const deleteUser = () => {
    method = "POST";
    action = "?/deleteUser";
  };

  const createRoom = () => {
    method = "POST";
    action = "?/createRoom";
  };

  const updateRoom = () => {
    method = "POST";
    action = "?/updateRoom";
  };

  const createScore = () => {
    method = "POST";
    action = "?/createScore";
  };

  const deleteRoom = () => {
    method = "POST";
    action = "?/deleteRoom";
    saveLocalData("currentPage", "room");
    removeLocalData("roomId");
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

<form
  {method}
  {action}
  class="{actions === 'updateScore'
    ? ''
    : actions === 'deleteUser' || actions === 'deleteRoom'
      ? 'flex'
      : 'mx-4'}"
>
  <slot />
  {#if actions === "createUser"}
    <div class="flex justify-center py-4">
      <ButtonAction pattern="create" on:click="{createUser}" />
    </div>
  {/if}
  {#if actions === "updateUser"}
    <div class="flex justify-center py-4">
      <ButtonAction pattern="update" on:click="{updateUser}" />
    </div>
  {/if}
  {#if actions === "deleteUser"}
    <Icon type="delete" on:click="{deleteUserModal}" />

    <Modal bind:popupModal isButton="{false}">
      <div class="py-4">本当に削除しますか？</div>
      <div class="flex justify-center space-x-4 py-4">
        <ButtonAction size="small" pattern="close" on:click="{closeModal}" />
        <ButtonAction size="small" pattern="delete" on:click="{deleteUser}" />
      </div>
    </Modal>
  {/if}

  {#if actions === "createRoom"}
    <div class="flex justify-center py-4">
      <ButtonAction pattern="create" on:click="{createRoom}" />
    </div>
  {/if}
  {#if actions === "updateRoom"}
    <div class="flex justify-center py-4">
      <ButtonAction pattern="update" on:click="{updateRoom}" />
    </div>
  {/if}
  {#if actions === "deleteRoom"}
    <Icon type="delete" on:click="{deleteRoomModal}" />

    <Modal bind:popupModal isButton="{false}">
      <div class="py-4">本当に削除しますか？</div>
      <div class="flex justify-center space-x-4 py-4">
        <ButtonAction size="small" pattern="close" on:click="{closeModal}" />
        <ButtonAction size="small" pattern="delete" on:click="{deleteRoom}" />
      </div>
    </Modal>
  {/if}
  {#if actions === "createScore"}
    <Modal isButton bind:popupModal>
      <div class="flex justify-center gap-4">
        <ButtonAction on:click="{closeModal}" pattern="close" size="small" />
        <ButtonAction on:click="{createScore}" pattern="add" size="small" />
      </div>
    </Modal>
  {/if}
</form>
