<script lang="ts">
  export let image: string;
  export let name: string;
  export let isLarge: boolean = false;
</script>

<button
  class="{isLarge ? 'w-40 h-40' : 'w-20 h-20'}
  border-2 border-blue-300 bg-blue-100 text-blue-500 font-bold rounded-md flex flex-col items-center justify-center"
  on:click
>
  <img
    class="{isLarge ? 'w-24 h-24' : 'w-12 h-12'}"
    src="{image}"
    alt="MemberIcon"
  />
  <div class="{isLarge ? 'text-2xl mt-2' : 'text-sm mt-1'} text-center">
    {name}
  </div>
</button>
