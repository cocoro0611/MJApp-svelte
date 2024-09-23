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
  import type { Room } from "$lib/models/interface.js";
  let room: Omit<
    Room,
    "initialPoint" | "returnPoint" | "bonusPoint" | "Rate" | "chipValue"
  > = {
    id: "",
    name: "部屋名",
    createdAt: "",
    users: [
      { id: "", name: "井上", icon: "monster01.png", createdAt: "" },
      { id: "", name: "山本", icon: "monster02.png", createdAt: "" },
      { id: "", name: "太郎", icon: "monster03.png", createdAt: "" },
      { id: "", name: "太郎", icon: "monster04.png", createdAt: "" },
    ],
  };
</script>

<Story name="Default">
  <RoomCard {room} />
</Story>
