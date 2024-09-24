<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomForm from "./RoomForm.svelte";

  export const meta: Meta<RoomForm> = {
    title: "features/Room/RoomForm",
    component: RoomForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData } from "$lib/models/Room/type.js";
  let users: UserData[] = [
    { id: "", name: "井上", icon: "monster01.png" },
    { id: "", name: "山本", icon: "monster02.png" },
    { id: "", name: "太郎", icon: "monster03.png" },
    { id: "", name: "太郎", icon: "monster04.png" },
  ];

  let room: RoomData = {
    id: "",
    name: "部屋名1",
    users: [
      { id: "", name: "井上", icon: "monster01.png", totalScore: 0 },
      { id: "", name: "山本", icon: "monster02.png", totalScore: 0 },
      { id: "", name: "太郎", icon: "monster03.png", totalScore: 0 },
      { id: "", name: "太郎", icon: "monster04.png", totalScore: 0 },
    ],
    initialPoint: 0,
    returnPoint: 0,
    bonusPoint: "",
    gameRate: 0,
    chipValue: 0,
  };
</script>

<Story name="Default">
  <RoomForm {room} {users} />
</Story>
