<script lang="ts">
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import type { Room } from "$lib/models/Total-Point/types.js";

  export let room: Room;

  let rows = [
    { label: "スコア", values: Array(room.users.length).fill(0) },
    { label: "チップ", values: Array(room.users.length).fill(0) },
    { label: "収支", values: Array(room.users.length).fill(0) },
  ];
</script>

<div
  class="fixed top-0 left-20 right-20 z-10 bg-blue-800 py-4 font-bold text-xl text-white flex justify-center"
>
  {room.name}
</div>

<div class="text-center -mt-2">
  <div class="grid grid-cols-5 bg-blue-100 text-blue-800">
    <button
      class="border-2 border-blue-800 h-auto w-auto rounded-md m-[0.1rem]"
    >
      <div class="flex items-center justify-center">ルール</div>
    </button>
    {#each room.users as user}
      <button
        class="border-2 border-blue-800 h-auto w-auto rounded-md m-[0.1rem]"
      >
        <div class="flex items-center justify-center border border-gray-300">
          <MemberCard image="/MemberIcon/{user.icon}">{user.name}</MemberCard>
        </div>
      </button>
    {/each}
  </div>

  {#each rows as row}
    <div class="grid grid-cols-5 bg-blue-800 text-white">
      <div class="flex items-center justify-center border border-gray-300">
        {row.label}
      </div>
      {#each row.values as value}
        <div class="flex items-center justify-center border border-gray-300">
          <div class="relative w-full flex justify-center items-center">
            <span>{value}</span>
            {#if row.label === "収支"}
              <span class="text-[0.7rem] absolute right-2">P</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>
