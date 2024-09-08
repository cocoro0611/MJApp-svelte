<script lang="ts">
  import type { Room } from "$lib/models/Total-Point/types.js";
  export let room: Room;
</script>

<button class="card" on:click>
  <h3 class="room-name">{room.name}</h3>
  <div class="user-icons">
    <!-- {#each room.users.slice(0, 4) as user}
      <img
        class="user-icon"
        src="/MemberIcon/{user.icon}"
        alt="{user.name}"
        title="{user.name}"
      />
      {user.name}
    {/each} -->
  </div>
</button>

<style>
  .card {
    @apply border border-blue-500 bg-blue-50 rounded-md w-full h-full p-2 text-blue-500 font-bold flex flex-col items-center justify-between;
  }
  .room-name {
    @apply text-lg mb-2;
  }
  .user-icons {
    @apply flex flex-wrap justify-center gap-1;
  }
  .user-icon {
    @apply w-10 h-10 rounded-full;
  }
  .user-count {
    @apply mt-2 text-sm;
  }
</style>
