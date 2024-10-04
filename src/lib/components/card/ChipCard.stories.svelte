<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ChipCard from "./ChipCard.svelte";

  export const meta: Meta<ChipCard> = {
    title: "CARD/ChipCard",
    component: ChipCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { RoomData, ChipData } from "$lib/models/Room/type.js";
  let chip: ChipData = {
    roomId: "",
    chipCount: 1,
    userChips: [
      {
        id: "",
        input: 20,
        chip: 20,
        userId: "",
        order: 1,
      },
      {
        id: "",
        input: 10,
        chip: 10,
        userId: "",
        order: 1,
      },
      {
        id: "",
        input: 30,
        chip: 30,
        userId: "",
        order: 1,
      },
      {
        id: "",
        input: 20,
        chip: 20,
        userId: "",
        order: 1,
      },
    ],
  };
  let room: RoomData = {
    id: "",
    name: "",
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    scoreRate: 50,
    chipRate: 200,
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

<Story name="Default">
  <ChipCard {room} {chip} />
</Story>
