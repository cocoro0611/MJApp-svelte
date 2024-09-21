<script lang="ts">
  import { Card } from "flowbite-svelte";
  import type { Room } from "$lib/models/interface.js";

  export let room: Room;
</script>

<Card
  class="relative bg-blue-50 border border-blue-500 text-blue-500 font-bold mx-4"
  on:click
>
  <div class="text-lg mb-2 text-left">{room.name}</div>
  <div class="flex flex-wrap justify-center gap-4">
    {#each room.users.slice(0, 4) as user}
      <div class="flex flex-col items-center">
        <img
          class="w-12 h-12 rounded-full"
          src="/MemberIcon/{user.icon}"
          alt="{user.name}"
          title="{user.name}"
        />
        <span class="text-sm">{user.name}</span>
        <span class="text-sm">0</span>
      </div>
    {/each}
  </div>
</Card>
