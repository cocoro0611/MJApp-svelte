<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomCard from "./RoomCard.svelte";

  export const meta: Meta<RoomCard> = {
    title: "CARD/RoomCard",
    component: RoomCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  import type { RoomData } from "$lib/models/Room/type.js";
  let room: RoomData = {
    id: "",
    name: "ルーム名",
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    scoreRate: 50,
    chipRate: 100,
    gameAmount: 0,
    users: [
      {
        id: "",
        name: "name1",
        icon: "",
        isDefault: true,
        totalScore: 100,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "name2",
        icon: "",
        isDefault: true,
        totalScore: -100,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "name3",
        icon: "",
        isDefault: true,
        totalScore: -200,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "name4",
        icon: "",
        isDefault: true,
        totalScore: 200,
        totalChip: 0,
        totalPoint: 0,
      },
    ],
  };
</script>

<Story name="Default">
  <RoomCard {room} /></Story
>
