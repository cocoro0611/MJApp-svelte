<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import type { ButtonConfig } from "$lib/models/Total-Point/types.js";

  const buttonConfig: { [key: string]: ButtonConfig } = {
    Btn1: { label: "25000点", value: 25000, group: "持ち点" },
    Btn2: { label: "30000点", value: 30000, group: "持ち点" },
    Btn3: { label: "35000点", value: 35000, group: "持ち点" },
    Btn4: { label: "40000点", value: 40000, group: "持ち点" },
    Btn5: { label: "30000点", value: 30000, group: "返し点" },
    Btn6: { label: "35000点", value: 35000, group: "返し点" },
    Btn7: { label: "40000点", value: 40000, group: "返し点" },
    Btn8: { label: "45000点", value: 45000, group: "返し点" },
    Btn9: { label: "なし", value: 0, group: "ウマ" },
    Btn10: { label: "5-10", value: 0, group: "ウマ" },
    Btn11: { label: "10-20", value: 0, group: "ウマ" },
    Btn12: { label: "10-30", value: 0, group: "ウマ" },
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
    {#each Object.entries(groupedButtons) as [group, buttonRows]}
      <div class="py-2 font-bold">{group}</div>
      {#each buttonRows as buttons}
        <div class="flex flex-wrap gap-2 mb-4">
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
