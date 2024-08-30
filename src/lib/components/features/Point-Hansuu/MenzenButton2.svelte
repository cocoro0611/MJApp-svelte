<script lang="ts">
  import Button2 from "$lib/components/ui/Button2.svelte";
  import ButtonCount from "$lib/components/ui/ButtonCount.svelte";

  interface ButtonList {
    label: string;
    value: number;
  }

  const items1: ButtonList[] = [
    { label: "立直", value: 1 },
    { label: "一発", value: 1 },
    { label: "門前清自摸和", value: 1 },
    { label: "白", value: 1 },
    { label: "發", value: 1 },
    { label: "中", value: 1 },
    { label: "自風牌", value: 1 },
    { label: "場風牌", value: 1 },
    { label: "断幺九", value: 1 },
    { label: "平和", value: 1 },
    { label: "一盃口", value: 1 },
    { label: "海底摸月", value: 1 },
    { label: "河底撈魚", value: 1 },
    { label: "嶺上開花", value: 1 },
    { label: "槍槓", value: 1 },
  ];

  // 配列を6個ずつのグループに分割する関数
  function chunkArray(arr: ButtonList[], size: number): ButtonList[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }

  const itemRows = chunkArray(items1, 6);
</script>

<div class="flex justify-center">
  <div class="grid gap-2">
    {#each itemRows as row}
      <div class="flex flex-wrap gap-2">
        {#each row as item1}
          <Button2>{item1.label}</Button2>
        {/each}
      </div>
    {/each}
  </div>
</div>
