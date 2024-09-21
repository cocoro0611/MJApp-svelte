<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ScoreSummary from "./ScoreSummary.svelte";

  export const meta: Meta<ScoreSummary> = {
    title: "features/Score/ScoreSummary",
    component: ScoreSummary,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { Room } from "$lib/models/interface.js";
  let rooms: Room[] = [
    {
      id: "aa",
      name: "部屋名1",
      users: [
        { id: "", name: "井上", icon: "monster01.png" },
        { id: "", name: "山本", icon: "monster02.png" },
        { id: "", name: "太郎", icon: "monster03.png" },
        { id: "", name: "太郎", icon: "monster04.png" },
      ],
      initialPoint: 25000,
      returnPoint: 30000,
      bonusPoint: "10-30",
      Rate: "なし",
      chipValue: "50P",
    },
    {
      id: "aa",
      name: "部屋名2",
      users: [
        { id: "", name: "井上", icon: "monster01.png" },
        { id: "", name: "山本", icon: "monster02.png" },
        { id: "", name: "太郎", icon: "monster03.png" },
        { id: "", name: "太郎", icon: "monster04.png" },
      ],
      initialPoint: 25000,
      returnPoint: 30000,
      bonusPoint: "10-30",
      Rate: "なし",
      chipValue: "50P",
    },
    {
      id: "aa",
      name: "部屋名3",
      users: [
        { id: "", name: "井上", icon: "monster01.png" },
        { id: "", name: "山本", icon: "monster02.png" },
        { id: "", name: "太郎", icon: "monster03.png" },
        { id: "", name: "太郎", icon: "monster04.png" },
      ],
      initialPoint: 25000,
      returnPoint: 30000,
      bonusPoint: "10-30",
      Rate: "なし",
      chipValue: "50P",
    },
  ];
</script>

<Story name="Default">
  <ScoreSummary {rooms} />
</Story>
