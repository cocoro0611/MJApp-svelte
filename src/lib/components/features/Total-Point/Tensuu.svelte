<script lang="ts">
  const rows = [
    { values: 1000 },
    { values: 1000 },
    { values: 1000 },
    { values: 1000 },
  ];
</script>

<div class="text-center">
  <div class="grid grid-cols-5 text-blue-800 border border-gray-300">
    <div class="flex items-center justify-center">点数</div>
    {#each rows as row}
      <button
        class="border border-blue-800 h-auto w-auto rounded-md m-[0.1rem]"
      >
        <div class="flex items-center justify-center border border-gray-300">
          {row.values}
        </div>
      </button>
    {/each}
  </div>
</div>
