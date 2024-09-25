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
        {:else if index === 1}
          {user.totalScore}
        {:else if index === 2}
          <div class="w-full grid grid-cols-10">
            <div
              class="col-span-1 flex items-end justify-center text-[0.6rem] mr-1"
            ></div>
            <div class="col-span-8 text-center">{user.totalChip}</div>
            <div
              class="col-span-1 flex items-end justify-center text-[0.6rem] mr-1"
            >
              枚
            </div>
          </div>
        {:else if index === 3}
          <div class="w-full grid grid-cols-10 font-bold">
            <div class="col-span-9 text-center">
              {user.totalPoint}
            </div>
            <div
              class="col-span-1 flex items-end justify-center text-[0.6rem] mr-1"
            >
              Ｐ
            </div>
          </div>
        {/if}
      </div>
    {/each}
  {/each}
</div>
