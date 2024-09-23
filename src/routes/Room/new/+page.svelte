<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";

  import dayjs from "dayjs";
  import type { Room, User } from "$lib/models/interface.js";
  export let users: User[];
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
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    Rate: 50,
    chipValue: 100,
  };

  export let currentPage: "roomHome" | "roomNew" | "roomDetail" = "roomHome";

  const backPage = () => {
    currentPage = "roomHome";
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">ルームの作成</svelte:fragment>
</Header>

<Main>
  <RoomForm {room} {users} />
</Main>
