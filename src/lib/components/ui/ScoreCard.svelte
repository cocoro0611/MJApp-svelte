<script lang="ts">
  import type { Room } from "$lib/models/Total-Point/types.js";
  export let room: Room;
</script>

<button class="card" on:click>
  <h3 class="room-name">{room.name}</h3>
  <div class="user-icons">
    {#each room.users.slice(0, 4) as user}
      <div class="user-icon-container">
        <img
          class="user-icon"
          src="/MemberIcon/{user.icon}"
          alt="{user.name}"
          title="{user.name}"
        />
        <span class="user-name">{user.name}</span>
        <span class="user-name">0</span>
      </div>
    {/each}
  </div>
</button>

<style>
  .card {
    @apply border border-blue-500 bg-blue-50 rounded-md text-blue-500 font-bold w-[22rem];
  }
  .room-name {
    @apply text-lg mb-2 text-left ml-2;
  }
  .user-icons {
    @apply flex flex-wrap justify-center gap-4;
  }
  .user-icon-container {
    @apply flex flex-col items-center;
  }
  .user-icon {
    @apply w-12 h-12 rounded-full;
  }
  .user-name {
    @apply text-sm;
  }
</style>
