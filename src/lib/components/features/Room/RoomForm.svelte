<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData, RoomFormData } from "$lib/models/Room/type.js";

  import dayjs from "dayjs";
  import Form from "$lib/components/layout/Form.svelte";
  import FormField from "$lib/components/layout/FormField.svelte";
  import RoomNameForm from "$lib/components/ui/RoomNameForm.svelte";
  import RoomMemberForm from "$lib/components/ui/RoomMemberForm.svelte";
  import RoomSettingForm from "$lib/components/ui/RoomSettingForm.svelte";
  import RoomAmountForm from "$lib/components/ui/RoomAmountForm.svelte";

  export let isUpdate: boolean = false;
  export let isDelete: boolean = false;
  export let users: UserData[];
  export let room: RoomData = {
    id: "",
    name: "",
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

  let roomForm: Omit<RoomFormData, "users"> = {
    id: "",
    name: `${dayjs().format("YYYY/MM/DD")}`,
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    scoreRate: 50,
    chipRate: 100,
    gameAmount: 0,
  };

  export let currentPage: "roomHome" | "roomNew" | "roomDetail" = "roomHome";
</script>

{#if !isDelete}
  <Form bind:currentPage actions="{isUpdate ? 'updateRoom' : 'createRoom'}">
    <input type="hidden" name="id" value="{roomForm.id}" />
    <FormField name="部屋名">
      <RoomNameForm {roomForm} />
    </FormField>
    <FormField name="メンバー">
      <RoomMemberForm {users} />
    </FormField>
    <FormField name="">
      <RoomSettingForm {roomForm} />
    </FormField>
    <FormField name="場代（後で編集できます）">
      <RoomAmountForm {roomForm} />
    </FormField>
  </Form>
{:else}
  <Form actions="deleteRoom">
    <input type="hidden" name="id" value="{room.id}" />
    {#each users.slice(0, 4) as user}
      <input type="hidden" name="userId" value="{user.id}" />
    {/each}
  </Form>
{/if}
