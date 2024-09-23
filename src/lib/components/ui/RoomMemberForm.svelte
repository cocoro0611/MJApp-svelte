<script lang="ts">
  import type { User } from "$lib/models/interface.js";
  export let users: User[];
  import MemberCard from "./MemberCard.svelte";
  import Button from "./Button.svelte";

  let isSelected: boolean;

  const onButton = () => {
    isSelected = !isSelected;
  };
</script>

<div class="flex justify-between items-center font-bold pt-4">
  <span>メンバー</span>
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
