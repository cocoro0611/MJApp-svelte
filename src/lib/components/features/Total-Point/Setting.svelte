<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import type { ButtonConfig } from "$lib/models/Total-Point/types.js";

  const buttonConfig: { [key: string]: ButtonConfig } = {
    Btn1: { label: "25000点", point: 25000, group: "持ち点" },
    Btn2: { label: "30000点", point: 30000, group: "持ち点" },
    Btn3: { label: "35000点", point: 35000, group: "持ち点" },
    Btn4: { label: "40000点", point: 40000, group: "持ち点" },
    Btn5: { label: "30000点", point: 30000, group: "返し点" },
    Btn6: { label: "35000点", point: 35000, group: "返し点" },
    Btn7: { label: "40000点", point: 40000, group: "返し点" },
    Btn8: { label: "45000点", point: 45000, group: "返し点" },
    Btn9: { label: "なし", uma: [0, 0], group: "ウマ" },
    Btn10: { label: "5-10", uma: [5, 10], group: "ウマ" },
    Btn11: { label: "10-20", uma: [10, 20], group: "ウマ" },
    Btn12: { label: "10-30", uma: [10, 30], group: "ウマ" },
    Btn13: { label: "なし", rate: 0, group: "レート" },
    Btn14: { label: "テンイチ", rate: 1, group: "レート" },
    Btn15: { label: "テンニ", rate: 2, group: "レート" },
    Btn16: { label: "テンサン", rate: 3, group: "レート" },
    Btn17: { label: "テンゴ", rate: 5, group: "レート" },
    Btn18: { label: "テンピン", rate: 10, group: "レート" },
    Btn19: { label: "なし", chip: 0, group: "チップ単価" },
    Btn20: { label: "50P", chip: 50, group: "チップ単価" },
    Btn21: { label: "100P", chip: 100, group: "チップ単価" },
    Btn22: { label: "200P", chip: 200, group: "チップ単価" },
  };

  const groupedButtons = Object.entries(buttonConfig).reduce(
    (acc, [key, config]) => {
      if (!acc[config.group]) {
        acc[config.group] = [];
      }
      const currentGroup = acc[config.group];
      if (
        currentGroup.length === 0 ||
        currentGroup[currentGroup.length - 1].length === 2
      ) {
        currentGroup.push([]);
      }
      currentGroup[currentGroup.length - 1].push([key, config]);
      return acc;
    },
    {} as Record<string, [string, ButtonConfig][][]>,
  );
</script>

<div class="flex justify-center">
  <div>
    <div class="py-2 font-bold">メンバー</div>
    <div class="flex justify-center gap-2 mb-2">
      <Button type="normal">P1</Button>
      <Button type="normal">P2</Button>
      <Button type="normal">P3</Button>
      <Button type="normal">P4</Button>
    </div>
    {#each Object.entries(groupedButtons) as [group, buttonRows]}
      <div class="py-2 font-bold">{group}</div>
      {#each buttonRows as buttons}
        <div class="flex flex-wrap gap-2 mb-2">
          {#each buttons as [btnKey, config]}
            <Button type="wight" on:click>
              <div class="text-xs">{config.label}</div>
            </Button>
          {/each}
        </div>
      {/each}
    {/each}
  </div>
</div>
<div class="flex justify-center my-4">
  <button class="btn-register">登録する</button>
</div>
