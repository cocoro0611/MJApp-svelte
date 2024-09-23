<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { User } from "$lib/models/interface.js";
  export let users: User[];

  import MemberCard from "$lib/components/ui/MemberCard.svelte";

  const dispatch = createEventDispatcher<{
    select: User;
  }>();

  const selectedUser = (user: User) => {
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
