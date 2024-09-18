<script lang="ts">
  import ButtonPattern from "$lib/components/ui/ButtonPattern.svelte";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close");
  };

  const handleDelete = () => {
    dispatch("delete");
  };
</script>

<div class="flex justify-center">ルームを削除しますか？</div>
<ButtonPattern
  on:close="{handleClose}"
  on:delete="{handleDelete}"
  pattern="delete"
/>
