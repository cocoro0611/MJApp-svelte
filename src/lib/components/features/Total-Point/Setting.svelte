<script lang="ts">
  import dayjs from "dayjs";
  import { createEventDispatcher } from "svelte";
  import { Input } from "flowbite-svelte";
  import type { Room } from "$lib/models/Total-Point/types.js";
  import Button from "$lib/components/ui/Button.svelte";
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import ButtonPattern from "$lib/components/ui/ButtonPattern.svelte";

  import { derived, writable, type Writable } from "svelte/store";
  import type { ButtonList } from "$lib/models/Total-Point/types.js";

  export let room: Room = {
    id: "",
    name: `${dayjs().format("YYYY/MM/DD")}`,
    // users: [
    //   { id: "", name: "", icon: "" },
    //   { id: "", name: "", icon: "" },
    //   { id: "", name: "", icon: "" },
    //   { id: "", name: "", icon: "" },
    // ],
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    Rate: "テンゴ",
    chipValue: "100P",
  };

  const itemsStores: Writable<ButtonList[]>[] = [
    writable([
      { label: "25000点", initialPoint: 25000, isSelected: true },
      { label: "30000点", initialPoint: 30000, isSelected: false },
      { label: "35000点", initialPoint: 35000, isSelected: false },
      { label: "40000点", initialPoint: 40000, isSelected: false },
    ]),
    writable([
      { label: "30000点", returnPoint: 30000, isSelected: true },
      { label: "35000点", returnPoint: 35000, isSelected: false },
      { label: "40000点", returnPoint: 40000, isSelected: false },
      { label: "45000点", returnPoint: 45000, isSelected: false },
    ]),
    writable([
      { label: "なし", bonusPoint: "なし", isSelected: false },
      { label: "5 - 10", bonusPoint: "5-10", isSelected: false },
      { label: "10 - 20", bonusPoint: "10-20", isSelected: false },
      { label: "10 - 30", bonusPoint: "10-30", isSelected: true },
    ]),
    writable([
      { label: "なし", Rate: "なし", isSelected: false },
      { label: "テンイチ", Rate: "テンイチ", isSelected: false },
      { label: "テンニ", Rate: "テンニ", isSelected: false },
      { label: "テンサン", Rate: "テンサン", isSelected: true },
      { label: "テンゴ", Rate: "テンゴ", isSelected: false },
      { label: "テンピン", Rate: "テンピン", isSelected: false },
    ]),
    writable([
      { label: "なし", chipValue: "なし", isSelected: false },
      { label: "100P", chipValue: "100P", isSelected: true },
      { label: "200P", chipValue: "200P", isSelected: false },
      { label: "300P", chipValue: "300P", isSelected: false },
      { label: "400P", chipValue: "400P", isSelected: false },
      { label: "500P", chipValue: "500P", isSelected: false },
    ]),
  ];

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
        item.isSelected = i === index;
      });
      const selectedItem = items[index];
      if (selectedItem.initialPoint !== undefined)
        room.initialPoint = selectedItem.initialPoint;
      if (selectedItem.returnPoint !== undefined)
        room.returnPoint = selectedItem.returnPoint;
      if (selectedItem.bonusPoint !== undefined)
        room.bonusPoint = selectedItem.bonusPoint;
      if (selectedItem.Rate !== undefined) room.Rate = selectedItem.Rate;
      if (selectedItem.chipValue !== undefined)
        room.chipValue = selectedItem.chipValue;
      return items;
    });
  };

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close");
  };

  let method: string = "";
  let action: string = "";
  const handleCreate = () => {
    if (validateRoom()) {
      method = "POST";
      action = "?/createRoom";
    }
  };

  let nameError: string = "";
  let nameMinLength = 1;
  let nameMaxLength = 10;
  const validateRoom = () => {
    nameError = "";
    if (room.name.length < 1) {
      nameError = `名前は${nameMinLength}文字以上で入力してください`;
    } else if (room.name.length > nameMaxLength) {
      nameError = `名前は${nameMaxLength}文字以内で入力してください`;
    }
    return nameError === "";
  };

  $: nameLengh = room.name.length;
</script>

<form {method} {action}>
  <div class="flex justify-center">
    <div>
      <div class="flex justify-between font-bold pt-4 pb-1">
        <div class="font-bold pb-1">部屋名</div>
      </div>
      <Input
        class="border border-blue-500"
        name="name"
        placeholder="部屋名を入力"
        bind:value="{room.name}"
        minlength="{nameMinLength}"
        maxlength="{nameMaxLength}"
      />
      <div class="flex justify-end">{nameLengh}/{nameMaxLength}</div>
      {#if nameError}
        <div class="text-red-500">{nameError}</div>
      {/if}
      <div class="flex justify-between font-bold pt-4 pb-1">
        <div>メンバー</div>
        <!-- <Button isCustom>カスタム</Button> -->
      </div>
      <MemberCard image="/MemberIcon/monster01.png">井上</MemberCard>
      <MemberCard image="/MemberIcon/monster02.png">井上</MemberCard>
      <MemberCard image="/MemberIcon/monster03.png">井上</MemberCard>
      <MemberCard image="/MemberIcon/monster04.png">井上</MemberCard>
      {#each $itemsGroup as group}
        <div class="flex justify-between font-bold pt-4">
          <div>
            <span class="mr-2">{group.title}</span>
            <span class="text-blue-500">
              {#if group.title === "持ち点"}
                {room.initialPoint} 点
              {:else if group.title === "返し点"}
                {room.returnPoint} 点
              {:else if group.title === "ウマ"}
                {room.bonusPoint}
              {:else if group.title === "レート"}
                {room.Rate}
              {:else if group.title === "チップ"}
                {room.chipValue}
              {/if}
            </span>
          </div>
          <!-- <Button isCustom>カスタム</Button> -->
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
  <input type="hidden" name="initialPoint" bind:value="{room.initialPoint}" />
  <input type="hidden" name="returnPoint" bind:value="{room.returnPoint}" />
  <input type="hidden" name="bonusPoint" bind:value="{room.bonusPoint}" />
  <input type="hidden" name="Rate" bind:value="{room.Rate}" />
  <input type="hidden" name="chipValue" bind:value="{room.chipValue}" />
  <ButtonPattern
    on:close="{handleClose}"
    on:create="{handleCreate}"
    pattern="default"
  />
</form>
