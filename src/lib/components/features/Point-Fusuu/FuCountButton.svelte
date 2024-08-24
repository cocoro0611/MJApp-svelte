<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";

  import type { ButtonConfig } from "$lib/models/Point-Fusuu/types.js";

  export let han: number;
  export let fu: number;
  export let buttonStates: { [key: string]: boolean };
  export let count: { [key: string]: number } = {};

  function clearHan() {
    han = 0;
    fu = 20;
    Object.keys(buttonStates).forEach((key) => {
      buttonStates[key] = false;
    });
    Object.keys(count).forEach((key) => {
      count[key] = 0;
    });
  }

  const buttonConfig: { [key: string]: ButtonConfig } = {
    Btn1: {
      label: "門前ロン",
      hanValue: 1,
      fuValue: 30,
      constFuValue: 30,
      group: "和了 + 翻数",
      isCount: true,
      isSelectAgari: true,
    },
    Btn2: {
      label: "ツモ",
      hanValue: 1,
      fuValue: 22,
      constFuValue: 22,
      group: "和了 + 翻数",
      isCount: true,
      isSelectAgari: true,
    },
    Btn3: {
      label: "七対子",
      hanValue: 1,
      fuValue: 25,
      constFuValue: 25,
      group: "和了 + 翻数",
      isCount: true,
      isChiToi: true,
      isSelectAgari: true,
    },
    Btn8: {
      label: "明刻",
      hanValue: 0,
      fuValue: 2,
      group: "面子(2-8)",
      isCount: true,
    },
    Btn9: {
      label: "暗刻",
      hanValue: 0,
      fuValue: 4,
      group: "面子(2-8)",
      isCount: true,
    },
    Btn10: {
      label: "明槓",
      hanValue: 0,
      fuValue: 8,
      group: "面子(2-8)",
      isCount: true,
    },
    Btn11: {
      label: "暗槓",
      hanValue: 0,
      fuValue: 16,
      group: "面子(2-8)",
      isCount: true,
    },
    Btn12: {
      label: "明刻",
      hanValue: 0,
      fuValue: 4,
      group: "面子(1, 9, 字牌)",
      isCount: true,
    },
    Btn13: {
      label: "暗刻",
      hanValue: 0,
      fuValue: 8,
      group: "面子(1, 9, 字牌)",
      isCount: true,
    },
    Btn14: {
      label: "明槓",
      hanValue: 0,
      fuValue: 16,
      group: "面子(1, 9, 字牌)",
      isCount: true,
    },
    Btn15: {
      label: "暗槓",
      hanValue: 0,
      fuValue: 32,
      group: "面子(1, 9, 字牌)",
      isCount: true,
    },
    Btn16: {
      label: "役牌",
      hanValue: 0,
      fuValue: 2,
      group: "雀頭",
      isSelectAtama: true,
    },
    Btn17: {
      label: "連風牌",
      hanValue: 0,
      fuValue: 4,
      group: "雀頭",
      isSelectAtama: true,
    },
    Btn18: {
      label: "単騎",
      hanValue: 0,
      fuValue: 2,
      group: "待ち",
      isSelectMati: true,
    },
    Btn19: {
      label: "辺張",
      hanValue: 0,
      fuValue: 2,
      group: "待ち",
      isSelectMati: true,
    },
    Btn20: {
      label: "間張",
      hanValue: 0,
      fuValue: 2,
      group: "待ち",
      isSelectMati: true,
    },
    Btn21: {
      label: "延べ単",
      hanValue: 0,
      fuValue: 2,
      group: "待ち",
      isSelectMati: true,
    },
  };

  type ButtonKey = keyof typeof buttonConfig;

  function handleBtn(btnKey: ButtonKey) {
    return () => {
      if (buttonConfig[btnKey].isCount) {
        handleDoraBtn(btnKey);
      } else {
        const newState = !buttonStates[btnKey];
        buttonStates[btnKey] = newState;
        fu += newState
          ? buttonConfig[btnKey].fuValue
          : -buttonConfig[btnKey].fuValue;
      }
    };
  }

  function handleDoraBtn(btnKey: ButtonKey) {
    if (!count[btnKey]) {
      count[btnKey] = 0;
    }

    count[btnKey] += 1;

    if (buttonConfig[btnKey].isChiToi) {
      // 七対子の特別な処理
      if (count[btnKey] <= 3) {
        buttonStates[btnKey] = true;
        fu = buttonConfig[btnKey].constFuValue || 25; // 七対子は常に25符
        han = 1 + count[btnKey]; // 1回目: 2翻, 2回目: 3翻, 3回目: 4翻
      } else {
        // 4回目のクリックでリセット
        count[btnKey] = 0;
        buttonStates[btnKey] = false;
        fu = 20; // デフォルトの符数に戻す
        han = 0; // 翻数をリセット
      }
    } else {
      // 通常のカウントボタンの処理（変更なし）
      if (count[btnKey] <= 4) {
        if (!buttonStates[btnKey]) {
          buttonStates[btnKey] = true;
          if ("constFuValue" in buttonConfig[btnKey]) {
            fu = buttonConfig[btnKey].constFuValue!;
          } else {
            fu += buttonConfig[btnKey].fuValue;
          }
          han += buttonConfig[btnKey].hanValue;
        } else {
          if (!("constFuValue" in buttonConfig[btnKey])) {
            fu += buttonConfig[btnKey].fuValue;
          }
          han += buttonConfig[btnKey].hanValue;
        }
      } else {
        count[btnKey] = 0;
        buttonStates[btnKey] = false;
        if ("constFuValue" in buttonConfig[btnKey]) {
          fu = 20;
        } else {
          fu -= 4 * buttonConfig[btnKey].fuValue;
        }
        han -= 4 * buttonConfig[btnKey].hanValue;
      }
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
              isSelected="{buttonStates[btnKey]}"
              on:click="{handleBtn(btnKey)}"
            >
              {#if config.isCount && count[btnKey]}
                {#if config.label === "門前ロン"}
                  <div class="text-[0.65rem] leading-tight">{config.label}</div>
                {:else}
                  <div class="text-xs">{config.label}</div>
                {/if}
                {#if config.label === "門前ロン" || config.label === "ツモ" || config.label === "七対子"}
                  <div class="text-xs">{count[btnKey]}翻</div>
                {:else}
                  <div class="text-xs">{count[btnKey]}つ</div>
                {/if}
              {:else if config.label === "門前ロン"}
                <div class="text-[0.65rem] leading-tight">{config.label}</div>
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

<!-- <button on:click="{clearHan}">aaaa</button> -->
