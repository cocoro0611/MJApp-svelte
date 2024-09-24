<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData } from "$lib/models/Room/type.js";

  import FormField from "$lib/components/layout/FormField.svelte";
  import RoomNameForm from "$lib/components/ui/RoomNameForm.svelte";
  import RoomMemberForm from "$lib/components/ui/RoomMemberForm.svelte";
  import RoomSettingForm from "$lib/components/ui/RoomSettingForm.svelte";

  export let isUpdate: boolean = false;
  export let isDelete: boolean = false;
  export let room: RoomData;
  export let users: UserData[];
</script>

{#if !isDelete}
  <FormField actions="{isUpdate ? 'updateRoom' : 'createRoom'}">
    <input type="hidden" name="id" value="{room.id}" />
    <RoomNameForm bind:room />
    <RoomMemberForm {users} />
    <RoomSettingForm bind:room />
  </FormField>
{:else}
  <FormField actions="deleteRoom">
    <input type="hidden" name="id" value="{room.id}" />
    {#each users.slice(0, 4) as user}
      <input type="hidden" name="userId" value="{user.id}" />
    {/each}
  </FormField>
{/if}
