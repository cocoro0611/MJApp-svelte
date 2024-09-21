<script lang="ts">
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

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
<ButtonAction
  on:close="{handleClose}"
  on:delete="{handleDelete}"
  pattern="delete"
/>
