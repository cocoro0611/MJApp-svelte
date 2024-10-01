<script lang="ts">
  import MemberCard from "$lib/components/ui/MemberCard.svelte";
  import { saveLocalData } from "$lib/utils/localStorage.js";
  import { currentPage } from "$lib/utils/pageStore.js";

  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];

  export let iscustomMember: boolean = false;

  const selectedUser = (user: UserData) => {
    saveLocalData("userId", user.id);
    currentPage.set("memberEdit");
  };

  let isColor: boolean = false;
  const selectUser = () => {
    isColor = true;
  };
</script>

{#if !iscustomMember}
  <div class="mx-4 grid grid-cols-4 md:grid-cols-6">
    {#each users as user}
      <div class="flex justify-center p-2">
        <MemberCard
          image="/MemberIcon/{user.icon}"
          name="{user.name}"
          on:click="{() => selectedUser(user)}"
        />
      </div>
    {/each}
  </div>
{/if}

{#if iscustomMember}
  <div class="mx-8 grid grid-cols-4">
    {#each users as user}
      <div class="flex justify-center p-2">
        <MemberCard
          size="small"
          bind:isColor
          image="/MemberIcon/{user.icon}"
          name="{user.name}"
          on:click="{selectUser}"
        />
      </div>
    {/each}
  </div>
{/if}
