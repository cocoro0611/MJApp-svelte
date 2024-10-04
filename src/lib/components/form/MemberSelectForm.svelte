<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import MemberCard from "$lib/components/card/MemberCard.svelte";
  import ButtonSelect from "$lib/components/ui/ButtonSelect.svelte";

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
  <MemberCard size="large" name="{user.name}" image="{user.icon}" />
</div>
<div class="grid grid-cols-6 md:grid-cols-12 py-2">
  {#each icons as icon}
    <div class="flex justify-center">
      <ButtonSelect
        isSelected="{user.icon === icon}"
        on:click="{() => onIconSelect(icon)}"
        image="{icon}"
      />
    </div>
  {/each}
</div>
