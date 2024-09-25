<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomCard from "./RoomCard.svelte";

  export const meta: Meta<RoomCard> = {
    title: "UI/RoomCard",
    component: RoomCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { RoomData } from "$lib/models/Room/type.js";
  let room: RoomData = {
    id: "",
    name: "",
    users: [
      {
        id: "",
        name: "井上",
        icon: "monster01.png",
        totalScore: 100,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "山本",
        icon: "monster02.png",
        totalScore: 100,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "太郎",
        icon: "monster03.png",
        totalScore: 100,
        totalChip: 0,
        totalPoint: 0,
      },
      {
        id: "",
        name: "太郎",
        icon: "monster04.png",
        totalScore: 100,
        totalChip: 0,
        totalPoint: 0,
      },
    ],
    initialPoint: 0,
    returnPoint: 0,
    bonusPoint: "",
    gameRate: 0,
    chipValue: 0,
  };
</script>

<Story name="Default">
  <RoomCard {room} />
</Story>
