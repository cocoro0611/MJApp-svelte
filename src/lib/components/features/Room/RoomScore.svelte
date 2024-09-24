<script lang="ts">
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import type { RoomData } from "$lib/models/Room/type.js";
  export let room: RoomData;

  const headers = ["ルール", "スコア", "チップ", "収支"];
</script>

<div class="grid grid-cols-5 gap-[0.1rem] bg-gray-100">
  {#each headers as header, index}
    <div
      class="{index === 0
        ? 'bg-blue-100 text-blue-800 border-2 border-blue-300 h-20 rounded-lg'
        : 'bg-blue-800 text-white'} 
        flex justify-center items-center"
    >
      {header}
    </div>
    {#each room.users as user}
      <div
        class="{index === 0
          ? 'bg-blue-100 border-2 border-blue-300 h-20 rounded-lg'
          : 'bg-blue-800 text-white'} 
          flex justify-center items-center"
      >
        {#if index === 0}
          <MemberCard
            isColor="{false}"
            image="/MemberIcon/{user.icon}"
            name="{user.name}"
            totalScore="{user.totalScore}"
          />
        {:else}
          0
        {/if}
      </div>
    {/each}
  {/each}
</div>
