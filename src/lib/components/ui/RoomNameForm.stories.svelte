<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomNameForm from "./RoomNameForm.svelte";

  export const meta: Meta<RoomNameForm> = {
    title: "UI/RoomNameForm",
    component: RoomNameForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { Room } from "$lib/models/interface.js";
  import dayjs from "dayjs";

  let room: Room = {
    id: "",
    name: `${dayjs().format("YYYY/MM/DD")}`,
    createdAt: "",
    users: [
      { id: "", name: "井上", icon: "monster01.png", createdAt: "" },
      { id: "", name: "山本", icon: "monster02.png", createdAt: "" },
      { id: "", name: "太郎", icon: "monster03.png", createdAt: "" },
      { id: "", name: "太郎", icon: "monster04.png", createdAt: "" },
    ],
    initialPoint: 0,
    returnPoint: 0,
    bonusPoint: "",
    Rate: 0,
    chipValue: 0,
  };
</script>

<Story name="Default">
  <RoomNameForm bind:room />
</Story>

{room.name}
