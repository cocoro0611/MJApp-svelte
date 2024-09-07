<script lang="ts">
  import type { User } from "$lib/models/Member/types.js";
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  export let users: User[];
</script>

<div class="flex justify-center">
  <div class="grid grid-cols-4">
    {#each users as user}
      <div class="p-1">
        <MemberCard isBorder image="/MemberIcon/{user.icon}">
          {user.name}
        </MemberCard>
      </div>
    {/each}
  </div>
</div>
