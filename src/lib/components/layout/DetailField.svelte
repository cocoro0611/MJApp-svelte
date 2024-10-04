<script lang="ts">
  export let name: string = "";
</script>

<div class="flex pl-4 items-center font-bold text-blue-800 bg-gray-200">
  {name}
</div>
<slot />
