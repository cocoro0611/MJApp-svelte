<script lang="ts">
  import MemberCard from "$lib/components/ui/MemberCard.svelte";

  import { createEventDispatcher } from "svelte";

  import type { UserData } from "$lib/models/Member/type.js";

  export let users: UserData[];

  const dispatch = createEventDispatcher<{
    select: UserData;
  }>();

  const selectedUser = (user: UserData) => {
    dispatch("select", user);
  };
</script>

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
