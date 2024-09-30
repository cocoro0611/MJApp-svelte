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

  export let users: UserData[];
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

  export let action;

  $: isDelete = action === "?/delete-room";
</script>

<Form {action}>
  <input type="hidden" name="id" value="{room.id}" />
  {#if !isDelete}
    <FormField name="部屋名">
      <RoomNameForm {room} />
    </FormField>
    <FormField name="メンバー">
      <RoomMemberForm {users} />
    </FormField>
    <FormField name="">
      <RoomSettingForm {room} />
    </FormField>
    <FormField name="場代">
      <RoomAmountForm {room} />
    </FormField>
  {/if}
</Form>
