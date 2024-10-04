<script lang="ts">
  import Grid from "$lib/components/layout/Grid.svelte";
  import MemberCard from "$lib/components/card/MemberCard.svelte";

  import { currentPage } from "$lib/utils/page-store.js";
  import { saveLocalData } from "$lib/utils/local-storage.js";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let room: RoomData;

  const userClick = (userId: string) => {
    saveLocalData("userId", userId);
    $currentPage = "roomUserEdit";
  };
</script>

<Grid rightContentes="{room.users}">
  <svelte:fragment slot="leftContent">
    <div class="w-full h-full p-[0.1rem] text-xs font-bold">
      <button
        on:click="{() => ($currentPage = 'roomEdit')}"
        class="flex items-center justify-center w-full h-full rounded-lg flex-col secondary"
      >
        <div class="pb-1">設定変更</div>
        <div>場代登録</div>
      </button>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="rightContent" let:rightContent="{user}">
    <div class="w-full h-full">
      <button
        on:click="{() => userClick(user.id)}"
        class="flex items-center justify-center w-full h-full rounded-lg secondary"
      >
        <MemberCard
          isColor="{false}"
          size="small"
          image="{user.icon}"
          name="{user.name}"
        />
      </button>
    </div>
  </svelte:fragment>
</Grid>

<Grid isPrimaryGrid rightContentes="{room.users}">
  <svelte:fragment slot="leftContent">
    <div class="flex justify-center items-center">スコア</div>
  </svelte:fragment>
  <svelte:fragment slot="rightContent" let:rightContent="{user}">
    <div class="flex justify-center items-center">
      {user.totalScore}
    </div>
  </svelte:fragment>
</Grid>

<Grid isPrimaryGrid rightContentes="{room.users}">
  <svelte:fragment slot="leftContent">
    <div class="flex justify-center items-center">チップ</div>
  </svelte:fragment>
  <svelte:fragment slot="rightContent" let:rightContent="{user}">
    <div class="flex justify-center items-center">
      <!-- 調整 -->
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
    </div>
  </svelte:fragment>
</Grid>

<Grid isPrimaryGrid rightContentes="{room.users}">
  <svelte:fragment slot="leftContent">
    <div class="flex justify-center items-center">収支</div>
  </svelte:fragment>
  <svelte:fragment slot="rightContent" let:rightContent="{user}">
    <div class="flex justify-center items-center">
      <!-- 調整 -->
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
    </div>
  </svelte:fragment>
</Grid>
