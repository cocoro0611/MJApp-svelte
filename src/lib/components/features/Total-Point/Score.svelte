<script lang="ts">
  import MemberCard from "$lib/components/ui/MemberCard.svelte";

  const members = [
    { name: "井上", icon: "/MemberIcon/monster01.png" },
    { name: "高橋", icon: "/MemberIcon/monster02.png" },
    { name: "岩田", icon: "/MemberIcon/monster03.png" },
    { name: "洪", icon: "/MemberIcon/monster04.png" },
  ];

  const rows = [
    { label: "スコア", values: [0, 0, 0, 0] },
    { label: "チップ", values: [0, 0, 0, 0] },
    { label: "収支", values: [0, 0, 0, 0] },
  ];
</script>

<div class="text-center">
  <div class="grid grid-cols-5 bg-blue-50 text-blue-800">
    <div class="flex items-center justify-center border border-white">
      メインルール
    </div>
    {#each members as member}
      <div class="flex items-center justify-center border border-white">
        <MemberCard isColor image="{member.icon}">{member.name}</MemberCard>
      </div>
    {/each}
  </div>

  {#each rows as row}
    <div class="grid grid-cols-5 bg-blue-800 text-white">
      <div class="flex items-center justify-center border border-white">
        {row.label}
      </div>
      {#each row.values as value}
        <div class="flex items-center justify-center border border-white">
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
