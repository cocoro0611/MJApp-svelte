<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";

  import type { ButtonConfig } from "$lib/models/Point-Fusuu/types.js";

  export let han: number;
  export let fu: number;
  export let buttonStates: { [key: string]: boolean };

  let doraCount: { [key: string]: number } = {};

  const buttonConfig: { [key: string]: ButtonConfig } = {
    Btn1: { label: "門前　ロン", hanValue: 0, fuValue: 10, group: "和了" },
    Btn2: { label: "ツモ", hanValue: 0, fuValue: 2, group: "和了" },
    Btn3: { label: "七対子", hanValue: 0, fuValue: 5, group: "和了" },
    Btn4: { label: "1翻", hanValue: 1, fuValue: 0, group: "翻数" },
    Btn5: { label: "2翻", hanValue: 2, fuValue: 0, group: "翻数" },
    Btn6: { label: "3翻", hanValue: 3, fuValue: 0, group: "翻数" },
    Btn7: { label: "4翻", hanValue: 4, fuValue: 0, group: "翻数" },
    Btn8: {
      label: "明刻",
      hanValue: 0,
      fuValue: 2,
      group: "面子(2-8)",
      isDora: true,
    },
    Btn9: {
      label: "暗刻",
      hanValue: 0,
      fuValue: 4,
      group: "面子(2-8)",
      isDora: true,
    },
    Btn10: {
      label: "明槓",
      hanValue: 0,
      fuValue: 8,
      group: "面子(2-8)",
      isDora: true,
    },
    Btn11: {
      label: "暗槓",
      hanValue: 0,
      fuValue: 16,
      group: "面子(2-8)",
      isDora: true,
    },
    Btn12: {
      label: "明刻",
      hanValue: 0,
      fuValue: 4,
      group: "面子(1, 9, 字牌)",
      isDora: true,
    },
    Btn13: {
      label: "暗刻",
      hanValue: 0,
      fuValue: 8,
      group: "面子(1, 9, 字牌)",
      isDora: true,
    },
    Btn14: {
      label: "明槓",
      hanValue: 0,
      fuValue: 16,
      group: "面子(1, 9, 字牌)",
      isDora: true,
    },
    Btn15: {
      label: "暗槓",
      hanValue: 0,
      fuValue: 32,
      group: "面子(1, 9, 字牌)",
      isDora: true,
    },
    Btn16: { label: "役牌　字牌", hanValue: 0, fuValue: 2, group: "雀頭" },
    Btn17: { label: "連風牌", hanValue: 0, fuValue: 4, group: "雀頭" },
    Btn18: { label: "単騎", hanValue: 0, fuValue: 2, group: "待ち" },
    Btn19: { label: "辺張", hanValue: 0, fuValue: 2, group: "待ち" },
    Btn20: { label: "間張", hanValue: 0, fuValue: 2, group: "待ち" },
    Btn21: { label: "延べ単", hanValue: 0, fuValue: 2, group: "待ち" },
  };

  type ButtonKey = keyof typeof buttonConfig;

  function handleBtn(btnKey: ButtonKey) {
    return () => {
      if (buttonConfig[btnKey].isDora) {
        handleDoraBtn(btnKey);
      } else {
        const newState = !buttonStates[btnKey];
        buttonStates[btnKey] = newState;
        fu += newState
          ? buttonConfig[btnKey].fuValue
          : -buttonConfig[btnKey].fuValue;
        han += newState
          ? buttonConfig[btnKey].hanValue
          : -buttonConfig[btnKey].hanValue;
      }
    };
  }

  function handleDoraBtn(btnKey: ButtonKey) {
    if (!doraCount[btnKey]) {
      doraCount[btnKey] = 0;
    }

    doraCount[btnKey] += 1;

    if (doraCount[btnKey] <= 4) {
      if (!buttonStates[btnKey]) {
        buttonStates[btnKey] = true;
        fu += buttonConfig[btnKey].fuValue;
      } else {
        fu += buttonConfig[btnKey].fuValue;
      }
    } else {
      doraCount[btnKey] = 0;
      buttonStates[btnKey] = false;
      fu -= 4 * buttonConfig[btnKey].fuValue;
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
        currentGroup[currentGroup.length - 1].length === 4
      ) {
        currentGroup.push([]);
      }
      currentGroup[currentGroup.length - 1].push([key, config]);
      return acc;
    },
    {} as Record<string, [string, ButtonConfig][][]>
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
