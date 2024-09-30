<script lang="ts">
  export let image = "/MemberIcon/monster01.png";
  export let isSelected: boolean = false;
</script>

<button
  type="button"
  class="flex items-center justify-center w-12 h-12 rounded-full
  {isSelected
    ? 'border-2 border-blue-300 bg-blue-100 hover:bg-blue-200'
    : 'hover:bg-blue-100'} "
  on:click
>
  <img class="w-8 h-8" src="{image}" alt="MemberIcon" />
</button>
