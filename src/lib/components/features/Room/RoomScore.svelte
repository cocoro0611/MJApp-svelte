<script lang="ts">
  import RoomScoreBord from "$lib/components/ui/RoomScoreBord.svelte";
  import type { PageType } from "$lib/models/page-type.js";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let room: RoomData;
  export let currentPage: PageType;
</script>

<RoomScoreBord {room} bind:currentPage />
