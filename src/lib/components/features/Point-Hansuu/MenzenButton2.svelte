<script lang="ts">
  import Button2 from "$lib/components/ui/Button2.svelte";

  export let han: number;

  interface ButtonList {
    label: string;
    value: number;
    isSelected: boolean;
  }

  let items1: ButtonList[] = [
    { label: "立直", value: 1, isSelected: false },
    { label: "一発", value: 1, isSelected: false },
    { label: "門前清自摸和", value: 1, isSelected: false },
    { label: "白", value: 1, isSelected: false },
    { label: "發", value: 1, isSelected: false },
    { label: "中", value: 1, isSelected: false },
    { label: "自風牌", value: 1, isSelected: false },
    { label: "場風牌", value: 1, isSelected: false },
    { label: "断幺九", value: 1, isSelected: false },
    { label: "平和", value: 1, isSelected: false },
    { label: "一盃口", value: 1, isSelected: false },
    { label: "海底摸月", value: 1, isSelected: false },
    { label: "河底撈魚", value: 1, isSelected: false },
    { label: "嶺上開花", value: 1, isSelected: false },
    { label: "槍槓", value: 1, isSelected: false },
  ];

  const onButton = (index: number) => {
    const isClisk = !items1[index].isSelected;
    items1[index].isSelected = !items1[index].isSelected;
    han += isClisk ? 1 : -1;
  };

  // 配列を6個ずつのグループに分割する関数
  function chunkArray(arr: ButtonList[], size: number): ButtonList[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

  $: item1Rows = chunkArray(items1, 6);
</script>

<div class="flex justify-center">
  <div class="grid gap-2">
    <div class="font-bold">１翻役</div>
    {#each item1Rows as row, rowIndex}
      <div class="flex flex-wrap gap-2">
        {#each row as item1, colIndex}
          {@const index = rowIndex * 6 + colIndex}
          <Button2
            isSelected="{item1.isSelected}"
            on:click="{() => onButton(index)}"
          >
            {item1.label}
          </Button2>
        {/each}
      </div>
    {/each}
  </div>
</div>
