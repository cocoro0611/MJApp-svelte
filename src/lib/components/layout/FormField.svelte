<script lang="ts">
  export let name: string;
</script>

<div class="">
  <div class="font-bold py-1">{name}</div>
  <div class=""><slot /></div>
</div>
