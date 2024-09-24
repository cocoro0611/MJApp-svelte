<script lang="ts">
  import MemberCard from "./MemberCard.svelte";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let room: RoomData;
</script>

<button
  class="bg-blue-100 border-2 border-blue-300 text-blue-500 rounded-lg font-bold p-2"
  on:click
>
  <div class="flex justify-start text-lg mx-2">
    {room.name}
  </div>
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
