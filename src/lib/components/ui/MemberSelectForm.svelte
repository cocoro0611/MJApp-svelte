<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import MemberIcon from "$lib/components/ui/MemberIcon.svelte";

  export let user: UserData;

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

  const onIconSelect = (icon: string) => {
    user.icon = icon;
  };
</script>

<div class="flex justify-center">
  <input type="hidden" name="icon" value="{user.icon}" />
  <MemberCard size="large" image="/MemberIcon/{user.icon}" name="{user.name}" />
</div>
<div class="grid grid-cols-6 mt-2">
  {#each icons as icon}
    <div class="flex justify-center">
      <MemberIcon
        isSelected="{user.icon === icon}"
        on:click="{() => onIconSelect(icon)}"
        image="/MemberIcon/{icon}"
      />
    </div>
  {/each}
</div>
