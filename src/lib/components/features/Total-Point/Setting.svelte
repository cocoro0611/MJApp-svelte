<script lang="ts">
  import dayjs from "dayjs";
  import { createEventDispatcher } from "svelte";
  import { Input } from "flowbite-svelte";

  import type { User } from "$lib/models/Member/types.js";
  import type { Room } from "$lib/models/Total-Point/types.js";
  import Button from "$lib/components/ui/Button.svelte";
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  import { derived, writable, type Writable } from "svelte/store";
  import type { ButtonList } from "$lib/models/Total-Point/types.js";

  export let users: User[];
  export let room: Room = {
    id: "",
    name: `${dayjs().format("YYYY/MM/DD")}`,
    createdAt: new Date(),
    users: [],
    initialPoint: 25000,
    returnPoint: 30000,
    bonusPoint: "10-30",
    Rate: 50,
    chipValue: 100,
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
      { label: "なし", bonusPoint: "00-00", isSelected: false },
      { label: "5 - 10", bonusPoint: "05-10", isSelected: false },
      { label: "10 - 20", bonusPoint: "10-20", isSelected: false },
      { label: "10 - 30", bonusPoint: "10-30", isSelected: true },
    ]),
    writable([
      { label: "なし", Rate: 0, isSelected: false },
      { label: "テンイチ", Rate: 10, isSelected: false },
      { label: "テンニ", Rate: 20, isSelected: false },
      { label: "テンサン", Rate: 30, isSelected: false },
      { label: "テンゴ", Rate: 50, isSelected: true },
      { label: "テンピン", Rate: 100, isSelected: false },
    ]),
    writable([
      { label: "なし", chipValue: 0, isSelected: false },
      { label: "100P", chipValue: 100, isSelected: true },
      { label: "200P", chipValue: 200, isSelected: false },
      { label: "300P", chipValue: 300, isSelected: false },
      { label: "400P", chipValue: 400, isSelected: false },
      { label: "500P", chipValue: 500, isSelected: false },
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
      <div class="flex justify-center">
        <div class="grid grid-cols-4">
          {#each users.slice(0, 4) as user}
            <input type="hidden" name="userId" bind:value="{user.id}" />
            <MemberCard image="/MemberIcon/{user.icon}" on:click>
              {user.name}
            </MemberCard>
          {/each}
        </div>
      </div>
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
                {#if room.bonusPoint === "00-00"}
                  なし
                {:else}
                  {room.bonusPoint}
                {/if}
              {:else if group.title === "レート"}
                {#if room.Rate === 0}
                  なし
                {:else if room.Rate === 10}
                  テンイチ
                {:else if room.Rate === 20}
                  テンニ
                {:else if room.Rate === 30}
                  テンサン
                {:else if room.Rate === 50}
                  テンゴ
                {:else if room.Rate === 100}
                  テンピン
                {:else}
                  カスタム
                {/if}
              {:else if group.title === "チップ"}
                {#if room.chipValue === 0}
                  なし
                {:else}
                  {room.chipValue} P
                {/if}
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
  <ButtonAction
    on:close="{handleClose}"
    on:create="{handleCreate}"
    pattern="create"
  />
</form>
