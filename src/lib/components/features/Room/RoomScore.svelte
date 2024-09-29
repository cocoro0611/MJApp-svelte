<script lang="ts">
  import RoomScoreBord from "$lib/components/ui/RoomScoreBord.svelte";
  import Modal from "$lib/components/layout/Modal.svelte";
  import RoomForm from "./RoomForm.svelte";
  import MemberForm from "../Member/MemberForm.svelte";
  import type { RoomData } from "$lib/models/Room/type.js";
  import type { UserData } from "$lib/models/Member/type.js";

  export let room: RoomData;

  export let popupModal = false;
  let ModalPage: "rule" | "user";
  let selectedUser: string = "";

  $: selectedUserData = room.users.find(
    (user) => user.id === selectedUser
  ) as UserData;
</script>

<RoomScoreBord {room} bind:popupModal bind:ModalPage bind:selectedUser />

<Modal isButton="{false}" bind:popupModal>
  {#if ModalPage === "rule"}
    <RoomForm {room} bind:popupModal formAction="update" />
  {/if}
  {#if ModalPage === "user" && selectedUserData}
    <MemberForm user="{selectedUserData}" bind:popupModal formAction="update" />
  {/if}
</Modal>
