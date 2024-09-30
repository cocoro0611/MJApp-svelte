<script lang="ts">
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let room: RoomData;

  // TODO:設定などの遷移
  const ruleClick = () => {};
  const userClick = (userId: string) => {};

  const headers = ["", "スコア", "チップ", "収支"];
</script>

<div class="grid grid-cols-5 gap-[0.1rem] bg-gray-100">
  {#each headers as header, index}
    {#if index === 0}
      <button
        on:click="{ruleClick}"
        class="
        bg-blue-100 text-blue-800 border-2 border-blue-300 h-20 rounded-lg font-bold
        hover:bg-blue-300
        flex flex-col justify-center items-center text-sm"
      >
        <span class="pb-1">設定変更</span>
        <span>場代登録</span>
      </button>
    {:else}
      <div class="bg-blue-800 text-white flex justify-center items-center">
        {header}
      </div>
    {/if}

    {#each room.users as user}
      {#if index === 0}
        <button
          on:click="{() => userClick(user.id)}"
          class="bg-blue-100 border-2 border-blue-300 hover:bg-blue-300 h-20 rounded-lg flex justify-center items-center"
        >
          <MemberCard
            isColor="{false}"
            image="/MemberIcon/{user.icon}"
            name="{user.name}"
            totalScore="{user.totalScore}"
          />
        </button>
      {:else}
        <div class="bg-blue-800 text-white flex justify-center items-center">
          {#if index === 1}
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
            <div class="w-full grid grid-cols-10">
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
      {/if}
    {/each}
  {/each}
</div>
