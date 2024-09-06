<script lang="ts">
  import { Input } from "flowbite-svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import { derived, writable, type Writable } from "svelte/store";
  import type { ButtonList } from "$lib/models/Total-Point/types.js";

  export let test: number;

  const itemsStores: Writable<ButtonList[]>[] = [
    writable([
      { label: "25000点", value: 1, isSelected: true },
      { label: "30000点", value: 1, isSelected: false },
      { label: "35000点", value: 1, isSelected: false },
      { label: "40000点", value: 1, isSelected: false },
    ]),
    writable([
      { label: "30000点", value: 1, isSelected: true },
      { label: "35000点", value: 1, isSelected: false },
      { label: "40000点", value: 1, isSelected: false },
      { label: "45000点", value: 1, isSelected: false },
    ]),
    writable([
      { label: "なし", value: 1, isSelected: false },
      { label: "5 - 10", value: 1, isSelected: false },
      { label: "10 - 20", value: 1, isSelected: false },
      { label: "10 - 30", value: 1, isSelected: true },
    ]),
    writable([
      { label: "なし", value: 1, isSelected: false },
      { label: "テンイチ", value: 1, isSelected: false },
      { label: "テンニ", value: 1, isSelected: false },
      { label: "テンサン", value: 1, isSelected: true },
      { label: "テンゴ", value: 1, isSelected: false },
      { label: "テンピン", value: 1, isSelected: false },
    ]),
    writable([
      { label: "なし", value: 1, isSelected: false },
      { label: "100P", value: 1, isSelected: true },
      { label: "200P", value: 1, isSelected: false },
      { label: "300P", value: 1, isSelected: false },
      { label: "400P", value: 1, isSelected: false },
      { label: "500P", value: 1, isSelected: false },
    ]),
  ];

  // 配列をグループに分割する関数
  function chunkArray(arr: ButtonList[], size: number): ButtonList[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }

  const titles = ["持ち点", "返し点", "ウマ", "レート", "チップ"];

  const itemsGroup = derived(itemsStores, ($itemsStores) =>
    $itemsStores.map((items, index) => ({
      title: titles[index],
      itemRows: chunkArray(items, 2),
      store: itemsStores[index],
    })),
  );

  const onButton = (store: Writable<ButtonList[]>, index: number) => {
    store.update((items: ButtonList[]) => {
      items.forEach((item, i) => {
        if (i !== index) {
          if (item.isSelected) {
            test -= item.value;
          }
          item.isSelected = false;
        }
      });
      const isClick = !items[index].isSelected;
      items[index].isSelected = isClick;
      test += isClick ? items[index].value : -items[index].value;
      return items;
    });
  };
</script>

<div class="flex justify-center">
  <div>
    <div class="font-bold pb-1">部屋名</div>
    <Input color="blue" id="" placeholder="部屋名を入力" />
    <div class="flex justify-between font-bold pt-4 pb-1">
      <div>メンバー</div>
      <Button isCustom>カスタム</Button>
    </div>
    <MemberCard image="/MemberIcon/monster01.png">井上</MemberCard>
    <MemberCard image="/MemberIcon/monster02.png">井上</MemberCard>
    <MemberCard image="/MemberIcon/monster03.png">井上</MemberCard>
    <MemberCard image="/MemberIcon/monster04.png">井上</MemberCard>
    {#each $itemsGroup as group}
      <div class="flex justify-between font-bold pt-4">
        <div>
          <span class="mr-2">{group.title}</span>
          <span>value</span>
        </div>
        <div>
          <Button isCustom>カスタム</Button>
        </div>
      </div>
      {#each group.itemRows as row, rowIndex}
        <div class="flex flex-wrap gap-2 py-1">
          {#each row as item, colIndex}
            {@const index = rowIndex * 2 + colIndex}
            <Button
              isWide
              isSelected="{item.isSelected}"
              on:click="{() => onButton(group.store, index)}"
            >
              {item.label}
            </Button>
          {/each}
        </div>
      {/each}
    {/each}
  </div>
</div>

<div class="flex justify-center mt-6 gap-2">
  <Button type="button" color="close">閉じる</Button>
  <Button type="button" color="primary">選択する</Button>
</div>
