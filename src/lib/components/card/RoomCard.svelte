<script lang="ts">
  import MemberCard from "$lib/components/card/MemberCard.svelte";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let room: RoomData;
</script>

<button class="rounded-lg font-bold secondary" on:click>
  <div class="flex justify-start text-lg mx-2">
    {room.name}
  </div>
  <div class="flex justify-center py-3">
    {#each room.users as user}
      <MemberCard
        isColor="{false}"
        isScore
        name="{user.name}"
        image="{user.icon}"
        totalScore="{user.totalScore}"
      />
    {/each}
  </div>
</button>
