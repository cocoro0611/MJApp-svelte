<script lang="ts">
  import MemberCard from "$lib/components/card/MemberCard.svelte";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let room: RoomData;
</script>

<button
  class="bg-blue-100 border-2 border-blue-300 text-blue-500 rounded-lg font-bold p-2
    hover:bg-blue-300 hover:scale-[1.03] active:bg-blue-300"
  on:click
>
  <div class="flex justify-start text-lg mx-2 text-blue-800">
    {room.name}
  </div>
  <div class="flex justify-center py-2">
    {#each room.users.slice(0, 4) as user}
      <MemberCard
        isColor="{false}"
        isScore
        image="/MemberIcon/{user.icon}"
        name="{user.name}"
        totalScore="{user.totalScore}"
      />
    {/each}
  </div>
</button>
