<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomScore from "./RoomScore.svelte";

  export const meta: Meta<RoomScore> = {
    title: "features/Room/RoomScore",
    component: RoomScore,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { Room } from "$lib/models/interface.js";

  let room: Room = {
    id: "",
    name: "",
    createdAt: "",
    users: [
      { id: "", name: "井上", icon: "monster01.png", createdAt: "" },
      { id: "", name: "山本", icon: "monster02.png", createdAt: "" },
      { id: "", name: "太郎", icon: "monster03.png", createdAt: "" },
      { id: "", name: "太郎", icon: "monster04.png", createdAt: "" },
    ],
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    Rate: 50,
    chipValue: 100,
  };
</script>

<Story name="Default">
  <RoomScore {room} />
</Story>
