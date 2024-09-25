<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";

  export let users: UserData[];
  import MemberCard from "./MemberCard.svelte";
  import Button from "./Button.svelte";

  let isSelected: boolean;

  const onButton = () => {
    isSelected = !isSelected;
  };
</script>

<div class="flex justify-between items-center font-bold pt-4">
  <!-- TODO:ユーザの選択 -->
  <!-- <Button isCustom bind:isSelected on:click="{onButton}">カスタム</Button> -->
</div>

<div class="flex justify-center">
  <div class="grid grid-cols-4">
    {#each users.slice(0, 4) as user}
      <input type="hidden" name="userId" value="{user.id}" />
      <MemberCard
        isColor="{false}"
        image="/MemberIcon/{user.icon}"
        name="{user.name}"
        on:click
      >
        {user.name}
      </MemberCard>
    {/each}
  </div>
</div>
