<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomSummary from "./RoomSummary.svelte";

  export const meta: Meta<RoomSummary> = {
    title: "features/Room/RoomSummary",
    component: RoomSummary,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { Room } from "$lib/models/interface.js";
  let rooms: Room[] = [
    {
      id: "",
      name: "部屋名1",
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
    },
    {
      id: "",
      name: "部屋名2",
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
    },
    {
      id: "",
      name: "部屋名3",
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
    },
  ];
</script>

<Story name="Default">
  <RoomSummary {rooms} />
</Story>
