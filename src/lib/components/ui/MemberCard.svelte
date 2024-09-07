<script lang="ts">
  export let image = "/MemberIcon/monster01.png";
  export let isColor: boolean = false;
</script>

<button class="btn-size {isColor ? 'btn-color' : ''}" on:click>
  <img class="icon-size" src="{image}" alt="MemberIcon" />
  <slot />
</button>

<style>
  .btn-color {
    @apply border-2 border-blue-800  bg-blue-100;
  }
  .btn-size {
    @apply text-blue-800 font-bold text-[0.7rem] w-[3.9rem] h-[3.9rem] rounded-md;
  }
  .icon-size {
    @apply ml-2 w-[2.8rem] h-[2.8rem];
  }
</style>
