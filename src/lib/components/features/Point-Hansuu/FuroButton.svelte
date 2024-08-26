<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";

  import type { ButtonConfig } from "$lib/models/Point-Hansuu/types.js";

  export let han: number;
  export let buttonStates: { [key: string]: boolean };
  export let doraCount: { [key: string]: number } = {};

  const buttonConfig: { [key: string]: ButtonConfig } = {
    // 1翻役
    Btn1: { label: "白", value: 1, group: "1翻役" },
    Btn2: { label: "發", value: 1, group: "1翻役" },
    Btn3: { label: "中", value: 1, group: "1翻役" },
    Btn4: { label: "自風牌", value: 1, group: "1翻役" },
    Btn5: { label: "場風牌", value: 1, group: "1翻役" },
    Btn6: { label: "断幺九", value: 1, group: "1翻役" },
    Btn7: { label: "海底摸月", value: 1, group: "1翻役" },
    Btn8: { label: "河底撈魚", value: 1, group: "1翻役" },
    Btn9: { label: "嶺上開花", value: 1, group: "1翻役" },
    Btn10: { label: "槍槓", value: 1, group: "1翻役" },
    Btn11: { label: "ドラ", value: 1, group: "1翻役", isDora: true },
    Btn12: { label: "三色同順", value: 1, group: "1翻役" },
    Btn13: { label: "一気通貫", value: 1, group: "1翻役" },
    Btn14: { label: "混全帯么九", value: 1, group: "1翻役" },
    // 2翻役
    Btn15: { label: "三色同刻", value: 2, group: "2翻役" },
    Btn16: { label: "三暗刻", value: 2, group: "2翻役" },
    Btn17: { label: "対々和", value: 2, group: "2翻役" },
    Btn18: { label: "三槓子", value: 2, group: "2翻役" },
    Btn19: { label: "小三元", value: 2, group: "2翻役" },
    Btn20: { label: "混老頭", value: 2, group: "2翻役" },
    Btn21: { label: "純全帯么九", value: 2, group: "2翻役" },
    Btn22: { label: "混一色", value: 2, group: "2翻役" },
    // 5翻役
    Btn23: { label: "清一色", value: 5, group: "5翻役" },
    // 役満
    Btn24: { label: "大三元", value: 13, group: "役満" },
    Btn25: { label: "緑一色", value: 13, group: "役満" },
    Btn26: { label: "字一色", value: 13, group: "役満" },
    Btn27: { label: "清老頭", value: 13, group: "役満" },
    Btn28: { label: "四槓子", value: 13, group: "役満" },
    Btn29: { label: "小四喜", value: 13, group: "役満" },
    // ダブル役満
    Btn30: { label: "大四喜", value: 26, group: "ダブル役満" },
  };

  type ButtonKey = keyof typeof buttonConfig;

  function handleBtn(btnKey: ButtonKey) {
    return () => {
      if (buttonConfig[btnKey].isDora) {
        handleDoraBtn(btnKey);
      } else {
        const newState = !buttonStates[btnKey];
        buttonStates[btnKey] = newState;
        han += newState
          ? buttonConfig[btnKey].value
          : -buttonConfig[btnKey].value;
      }
    };
  }

  function handleDoraBtn(btnKey: ButtonKey) {
    if (!doraCount[btnKey]) {
      doraCount[btnKey] = 0;
    }

    doraCount[btnKey] += 1;

    if (doraCount[btnKey] <= 12) {
      if (!buttonStates[btnKey]) {
        buttonStates[btnKey] = true;
        han += buttonConfig[btnKey].value;
      } else {
        han += buttonConfig[btnKey].value;
      }
    } else {
      doraCount[btnKey] = 0;
      buttonStates[btnKey] = false;
      han -= 12 * buttonConfig[btnKey].value;
    }

    buttonStates = { ...buttonStates };
  }

  const groupedButtons = Object.entries(buttonConfig).reduce(
    (acc, [key, config]) => {
      if (!acc[config.group]) {
        acc[config.group] = [];
      }
      const currentGroup = acc[config.group];
      if (
        currentGroup.length === 0 ||
        currentGroup[currentGroup.length - 1].length === 6
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
            <Button
              type="normal"
              isSelected="{buttonStates[btnKey]}"
              on:click="{handleBtn(btnKey)}"
            >
              {#if config.isDora && doraCount[btnKey]}
                <div class="text-xs">{config.label} {doraCount[btnKey]}</div>
              {:else}
                <div class="text-xs">{config.label}</div>
              {/if}
            </Button>
          {/each}
        </div>
      {/each}
    {/each}
  </div>
</div>
