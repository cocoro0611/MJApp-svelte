<script lang="ts">
  import dayjs from "dayjs";
  import Form from "$lib/components/layout/Form.svelte";
  import FormField from "$lib/components/layout/FormField.svelte";
  import RoomNameForm from "$lib/components/ui/RoomNameForm.svelte";
  import RoomMemberForm from "$lib/components/ui/RoomMemberForm.svelte";
  import RoomSettingForm from "$lib/components/ui/RoomSettingForm.svelte";
  import RoomAmountForm from "$lib/components/ui/RoomAmountForm.svelte";

  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let users: UserData[] = [
    {
      id: "",
      name: "",
      icon: "",
    },
  ];
  export let room: RoomData = {
    id: "",
    name: `${dayjs().format("YYYY/MM/DD")}`,
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    scoreRate: 50,
    chipRate: 100,
    gameAmount: 0,
    users: [
      {
        id: "",
        name: "",
        icon: "",
        totalScore: 0,
        totalChip: 0,
        totalPoint: 0,
      },
    ],
  };

  export let formAction: "create" | "update" | "delete";
</script>

{#if formAction === "create" || formAction === "update"}
  <Form actions="{formAction === 'create' ? 'createRoom' : 'updateRoom'}">
    <input type="hidden" name="id" value="{room.id}" />
    {#if formAction === "create"}
      <FormField name="部屋名">
        <RoomNameForm {room} />
      </FormField>
      <FormField name="メンバー">
        <RoomMemberForm {users} />
      </FormField>
    {/if}
    <FormField name="">
      <RoomSettingForm {room} />
    </FormField>
    {#if formAction === "update"}
      <input type="hidden" name="name" value="{room.name}" />
      <FormField name="場代">
        <RoomAmountForm {room} />
      </FormField>
    {/if}
  </Form>
{/if}

{#if formAction === "delete"}
  <Form actions="deleteRoom">
    <input type="hidden" name="id" value="{room.id}" />
    {#each room.users as roomUser}
      {#each users as user}
        {#if roomUser.id === user.id}
          <input type="hidden" name="userId" value="{user.id}" />
        {/if}
      {/each}
    {/each}
  </Form>
{/if}
