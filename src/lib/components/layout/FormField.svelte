<script lang="ts">
  export let name: string;
</script>

<div class="">
  <div class="flex justify-start font-bold py-1">{name}</div>
  <div class=""><slot /></div>
</div>
