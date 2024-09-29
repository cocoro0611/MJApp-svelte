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

  export let popupModal = false;

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

  const createChip = () => {
    method = "POST";
    action = "?/createChip";
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
    <div class="flex justify-center py-4 {popupModal ? 'gap-4' : ''}">
      {#if popupModal}
        <ButtonAction pattern="close" size="small" on:click="{closeModal}" />
      {/if}
      <ButtonAction
        pattern="update"
        size="{popupModal ? 'small' : 'normal'}"
        on:click="{updateUser}"
      />
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
    <div class="flex justify-center gap-4 my-4">
      <ButtonAction pattern="close" size="small" on:click="{closeModal}" />
      <ButtonAction pattern="update" size="small" on:click="{updateRoom}" />
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
      <div class="flex justify-start py-2 font-bold">
        以下のデータを追加しますか？
      </div>
      <div class="flex justify-center gap-4">
        <ButtonAction
          on:click="{createScore}"
          pattern="addScore"
          size="small"
        />
        <ButtonAction on:click="{createChip}" pattern="addChip" size="small" />
      </div>
      <div class="flex justify-start py-2 font-bold">場代を登録しますか？</div>
      <div class="flex justify-center gap-4">
        <ButtonAction on:click="{closeModal}" pattern="close" size="small" />
        <ButtonAction on:click pattern="liquidation" size="small" />
      </div>
    </Modal>
  {/if}
</form>
