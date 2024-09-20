<script lang="ts">
  import ButtonAction from "$lib/components/ui/ButtonAction.svelte";

  import { createEventDispatcher } from "svelte";
  export let scoreOrder: number;

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close");
  };

  const handleAdd = () => {
    dispatch("add");
  };
</script>

<div class="flex justify-center">{scoreOrder}回戦目を追加しますか？</div>

<ButtonAction on:close="{handleClose}" on:add="{handleAdd}" pattern="add" />
