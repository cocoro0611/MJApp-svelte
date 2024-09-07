<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Input } from "flowbite-svelte";
  import type { User } from "$lib/models/Member/types.js";
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import MemberIcon from "$lib/components/ui/MemberIcon.svelte";
  import ButtonPattern from "$lib/components/ui/ButtonPattern.svelte";

  export let data: User[];
  export let isDelete: boolean = false;

  const dispatch = createEventDispatcher();

  let user: User = {
    name: "",
    icon: "monster01.png",
  };

  const onIconSelect = (icon: string) => {
    user.icon = icon;
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    dispatch("submit", event);
  };

  const icons = [
    "monster01.png",
    "monster02.png",
    "monster03.png",
    "monster04.png",
    "monster05.png",
    "monster06.png",
    "monster07.png",
    "monster08.png",
    "monster09.png",
    "monster10.png",
    "monster11.png",
    "monster12.png",
    "animal_arupaka.png",
    "animal_buta.png",
    "animal_hamster.png",
    "animal_hiyoko.png",
    "animal_inu.png",
    "animal_kuma.png",
    "animal_mitsubachi.png",
    "animal_neko.png",
    "animal_panda.png",
    "animal_penguin.png",
    "animal_usagi.png",
    "icon_others_08.png",
  ];
</script>

<form method="POST" action="?/createForm" on:submit="{handleSubmit}">
  <div class="flex justify-center">
    <div>
      <div class="flex justify-start">
        <div class="font-bold">名前</div>
      </div>
      <Input
        class="border border-blue-500"
        name="name"
        placeholder="名前を入力"
        bind:value="{user.name}"
      />
      <div class="flex justify-start pt-4">
        <div class="font-bold">アイコン</div>
      </div>
      <div class="flex justify-center">
        <input type="hidden" name="icon" value="{user.icon}" />
        <MemberCard isBig image="/MemberIcon/{user.icon}"
          >{user.name}</MemberCard
        >
      </div>
      <div class="flex justify-center">
        <div class="pt-2 grid grid-cols-4 gap-2">
          {#each icons as icon}
            <MemberIcon
              isSelected="{user.icon === icon}"
              on:click="{() => onIconSelect(icon)}"
              image="/MemberIcon/{icon}"
            />
          {/each}
        </div>
      </div>
      {#if isDelete}
        <div class="flex justify-between items-center pt-4">
          <div class="font-bold">メンバーの削除</div>
          <ButtonPattern pattern="delete" />
        </div>
      {/if}
      <ButtonPattern pattern="default" />
    </div>
  </div>
</form>
