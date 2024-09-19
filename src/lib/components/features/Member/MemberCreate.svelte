<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Input } from "flowbite-svelte";
  import type { User } from "$lib/models/Member/types.js";
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import MemberIcon from "$lib/components/ui/MemberIcon.svelte";
  import ButtonPattern from "$lib/components/ui/ButtonPattern.svelte";
  import Modal from "$lib/components/ui/Modal.svelte";

  export let isUpdate: boolean = false;
  let popupModal = false;

  export let user: User = {
    id: "",
    name: "",
    icon: "monster01.png",
    createdAt: new Date(),
  };

  const icons = [
    "monster01.png",
    "monster02.png",
    "monster03.png",
    "monster04.png",
    "monster05.png",
    "monster06.png",
    "monster07.png",
    "monster08.png",
    "monster09.png",
    "monster10.png",
    "monster11.png",
    "monster12.png",
    "animal_arupaka.png",
    "animal_buta.png",
    "animal_hamster.png",
    "animal_hiyoko.png",
    "animal_inu.png",
    "animal_kuma.png",
    "animal_mitsubachi.png",
    "animal_neko.png",
    "animal_panda.png",
    "animal_penguin.png",
    "animal_usagi.png",
    "icon_others_08.png",
  ];

  const onIconSelect = (icon: string) => {
    user.icon = icon;
  };

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close");
    popupModal = false;
  };

  let method: string = "";
  let action: string = "";
  const handleCreate = () => {
    if (validateUser()) {
      method = "POST";
      action = "?/createUser";
    }
  };
  const handleUpdate = () => {
    if (validateUser()) {
      method = "POST";
      action = "?/updateUser";
    }
  };
  const handleDeleteModal = () => {
    popupModal = true;
  };
  const handleDelete = () => {
    method = "POST";
    action = "?/deleteUser";
  };

  let nameError: string = "";
  let nameMinLength = 1;
  let nameMaxLength = 5;
  const validateUser = () => {
    nameError = "";
    if (user.name.length < 1) {
      nameError = `名前は${nameMinLength}文字以上で入力してください`;
    } else if (user.name.length > nameMaxLength) {
      nameError = `名前は${nameMaxLength}文字以内で入力してください`;
    }
    return nameError === "";
  };

  $: nameLengh = user.name.length;
</script>

<form {method} {action}>
  {#if isUpdate}
    <input type="hidden" name="id" value="{user.id}" />
  {/if}
  <div class="flex justify-center">
    <div>
      <div class="flex justify-start">
        <div class="font-bold">名前</div>
      </div>
      <Input
        class="border border-blue-500"
        name="name"
        placeholder="名前を入力"
        bind:value="{user.name}"
        minlength="{nameMinLength}"
        maxlength="{nameMaxLength}"
      />
      <div class="flex justify-end">{nameLengh}/{nameMaxLength}</div>
      {#if nameError}
        <div class="text-red-500">{nameError}</div>
      {/if}
      <div class="flex justify-start pt-4">
        <div class="font-bold">アイコン</div>
      </div>
      <div class="flex justify-center">
        <input type="hidden" name="icon" value="{user.icon}" />
        <MemberCard isBig image="/MemberIcon/{user.icon}"
          >{user.name}</MemberCard
        >
      </div>
      <div class="flex justify-center">
        <div class="pt-2 grid grid-cols-4 gap-2">
          {#each icons as icon}
            <MemberIcon
              isSelected="{user.icon === icon}"
              on:click="{() => onIconSelect(icon)}"
              image="/MemberIcon/{icon}"
            />
          {/each}
        </div>
      </div>
      {#if isUpdate}
        <div class="flex justify-between items-center pt-4">
          <div class="font-bold">メンバーの削除</div>
          <ButtonPattern on:delete="{handleDeleteModal}" pattern="deleteOnly" />
        </div>
        <ButtonPattern
          on:close="{handleClose}"
          on:update="{handleUpdate}"
          pattern="update"
        />
      {:else}
        <ButtonPattern
          on:close="{handleClose}"
          on:create="{handleCreate}"
          pattern="default"
        />
      {/if}
    </div>
  </div>
  <Modal bind:popupModal isButton="{false}">
    <div class="flex justify-center">本当に削除しますか？</div>
    <ButtonPattern
      on:delete="{handleDelete}"
      on:close="{handleClose}"
      pattern="delete"
    />
  </Modal>
</form>
