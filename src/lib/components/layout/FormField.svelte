<script lang="ts">
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import Icon from "../ui/Icon.svelte";
  export let actions: "createUser" | "updateUser" | "deleteUser";

  let popupModal = false;

  let method: string = "";
  let action: string = "";

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

  const closeModal = () => {
    popupModal = false;
  };

  const deleteUserModal = () => {
    popupModal = true;
  };
</script>

<form {method} {action} class="{actions === 'deleteUser' ? 'flex' : 'mx-4'}">
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
</form>

<!-- <script lang="ts">
  import { validateUser, validateRoom } from "$lib/utils/validate.js";
  export let type: "member" | "room" | "score";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let method: string = "";
  export let action: string = "";

  const create = () => {
    method = "POST";
    action = "?/createUser";
    dispatch("aaa");
  };

  const handleCreate = () => {
    if ((type = "member")) {
      if (validateUser()) {
        method = "POST";
        action = "?/createUser";
      }
    }
    if ((type = "room")) {
      if (validateRoom()) {
        method = "POST";
        action = "?/createRoom";
      }
    }
    if ((type = "score")) {
      method = "POST";
      action = "?/createScore";
    }
  };

  export const handleUpdate = () => {
    if ((type = "member")) {
      if (validateUser()) {
        method = "POST";
        action = "?/updateUser";
      }
    }
    if ((type = "score")) {
      if (validateUser()) {
        method = "POST";
        action = "?/updateScore";
      }
    }
  };

  export const handleDelete = () => {
    if ((type = "member")) {
      method = "POST";
      action = "?/deleteUser";
    }
    if ((type = "room")) {
      method = "POST";
      action = "?/deleteRoom";
    }
  };
</script>

<form {method} {action}>
  <slot />
</form> -->
