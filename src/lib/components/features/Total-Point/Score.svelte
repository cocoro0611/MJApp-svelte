<script lang="ts">
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import type { Room } from "$lib/models/Total-Point/types.js";
  import Icon from "$lib/components/ui/Icon.svelte";
  import Modal from "$lib/components/ui/Modal.svelte";
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  export let room: Room;
  export let isScorePage: Boolean;
  export let summedUma: number[] = [];
  let popupModal = false;

  $: rows = [
    { label: "スコア", values: summedUma.map((value) => value.toFixed(1)) },
    { label: "チップ", values: Array(room.users.length).fill(0) },
    {
      label: "収支",
      values: summedUma.map((value) => (value * room.Rate).toFixed(0)),
    },
  ];

  const handleBackPage = () => {
    isScorePage = false;
  };

  let method: string = "";
  let action: string = "";
  const handleDeleteModal = () => {
    popupModal = true;
  };
  const handleDelete = () => {
    method = "POST";
    action = "?/deleteRoom";
  };
  const handleClose = () => {
    popupModal = false;
  };
</script>

<form {method} {action}>
  <input type="hidden" name="id" value="{room.id}" />
  {#each room.users as user}
    <input type="hidden" name="userIds" value="{user.id}" />
  {/each}

  <div class="fixed top-0 left-0 right-0 z-20 flex justify-center bg-blue-800">
    <div class="w-full max-w-screen-xl">
      <div class="py-6 font-bold text-xl text-white">
        <div class="grid grid-cols-6 gap-4">
          <button class="flex justify-center" on:click="{handleBackPage}">
            <Icon type="back" />
          </button>
          <div class="flex justify-center col-span-4">{room.name}</div>
          <button class="flex justify-center" on:click="{handleDeleteModal}">
            <Icon type="delete" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <Modal bind:popupModal isButton="{false}">
    <div class="flex justify-center">本当に削除しますか？</div>
    <ButtonAction
      on:delete="{handleDelete}"
      on:close="{handleClose}"
      pattern="delete"
    />
  </Modal>
</form>

<div class="fixed top-[5rem] left-0 right-0 z-10 flex justify-center">
  <div class="w-full max-w-screen-xl">
    <div class="grid grid-cols-5 bg-blue-100 text-blue-800">
      <button
        class="border-2 border-blue-800 h-auto w-auto rounded-md m-[0.1rem]"
      >
        <div class="flex items-center justify-center">ルール</div>
      </button>
      {#each room.users as user}
        <button
          class="border-2 border-blue-800 h-auto w-auto rounded-md m-[0.1rem]"
        >
          <div class="flex items-center justify-center">
            <MemberCard image="/MemberIcon/{user.icon}">{user.name}</MemberCard>
          </div>
        </button>
      {/each}
    </div>

    {#each rows as row}
      <div class="grid grid-cols-5 bg-blue-800 text-white">
        <div class="flex items-center justify-center border border-gray-300">
          {row.label}
        </div>
        {#each row.values as value}
          <div class="flex items-center justify-center border border-gray-300">
            <div class="relative w-full flex justify-center items-center">
              <span>{value}</span>
              {#if row.label === "収支"}
                <span class="text-[0.7rem] absolute right-2">P</span>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<div class="mt-[8rem]"></div>
