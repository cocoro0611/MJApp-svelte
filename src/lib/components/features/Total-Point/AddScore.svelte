<script lang="ts">
  import ButtonPattern from "$lib/components/ui/ButtonPattern.svelte";

  import { createEventDispatcher } from "svelte";
  export let scoreOrder: Number;

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close");
  };

  const handleAdd = () => {
    dispatch("add");
  };
</script>

<div class="flex justify-center">{scoreOrder}回戦目を追加しますか？</div>

<ButtonPattern on:close="{handleClose}" on:add="{handleAdd}" pattern="add" />
