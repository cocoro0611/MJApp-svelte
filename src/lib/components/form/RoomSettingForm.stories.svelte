<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomSettingForm from "./RoomSettingForm.svelte";

  export const meta: Meta<RoomSettingForm> = {
    title: "FORM/RoomSettingForm",
    component: RoomSettingForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  import { v4 } from "uuid";
  import dayjs from "dayjs";
  import type { RoomData } from "$lib/models/Room/type.js";
  export let room: RoomData = {
    id: v4(),
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
        isDefault: false,
        totalScore: 0,
        totalChip: 0,
        totalPoint: 0,
      },
    ],
  };
</script>

<Story name="Default"><RoomSettingForm {room} /></Story>
