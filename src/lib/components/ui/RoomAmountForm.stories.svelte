<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomAmountForm from "./RoomAmountForm.svelte";

  export const meta: Meta<RoomAmountForm> = {
    title: "UI/RoomAmountForm",
    component: RoomAmountForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { RoomData } from "$lib/models/Room/type.js";
  import dayjs from "dayjs";

  let room: RoomData = {
    id: "",
    name: `${dayjs().format("YYYY/MM/DD")}`,
    users: [
      {
        id: "",
        name: "井上",
        icon: "monster01.png",
        totalScore: 0,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "山本",
        icon: "monster02.png",
        totalScore: 0,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "太郎",
        icon: "monster03.png",
        totalScore: 0,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "太郎",
        icon: "monster04.png",
        totalScore: 0,
        totalChip: 0,
        totalPoint: 0,
      },
    ],
    initialPoint: 0,
    returnPoint: 0,
    bonusPoint: "",
    scoreRate: 0,
    chipRate: 0,
  };
</script>

<Story name="Default">
  <RoomAmountForm />
</Story>

{room.name}
