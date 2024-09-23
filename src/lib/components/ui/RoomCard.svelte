<script lang="ts">
  import type { Room } from "$lib/models/interface.js";
  import MemberCard from "./MemberCard.svelte";
  export let room: Omit<
    Room,
    "initialPoint" | "returnPoint" | "bonusPoint" | "Rate" | "chipValue"
  >;
</script>

<button
  class="bg-blue-100 border-2 border-blue-300 text-blue-500 rounded-lg font-bold p-2"
  on:click
>
  <div class="flex justify-start text-lg mx-2">{room.name}</div>
  <div class="flex justify-center py-2">
    {#each room.users.slice(0, 4) as user}
      <MemberCard
        isColor="{false}"
        isScore
        image="/MemberIcon/{user.icon}"
        name="{user.name}"
      />
    {/each}
  </div>
</button>
