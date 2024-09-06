<script lang="ts">
  export let image = "/MemberIcon/monster01.png";
  export let isSelected: boolean = false;
</script>

<button
  class="btn-size {isSelected ? 'btn-color' : 'hover:bg-blue-50'} "
  on:click
>
  <img class="icon-size" src="{image}" alt="MemberIcon" />
</button>

<style>
  .btn-color {
    @apply border border-blue-300 bg-blue-100 hover:bg-blue-50;
  }
  .btn-size {
    @apply w-[3rem] h-[3rem] rounded-full flex items-center justify-center;
  }
  .icon-size {
    @apply w-[2.2rem] h-[2.2rem];
  }
</style>
