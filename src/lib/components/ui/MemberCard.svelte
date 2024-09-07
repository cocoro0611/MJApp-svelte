<script lang="ts">
  export let image = "/MemberIcon/monster01.png";
  export let isBorder: boolean = false;
  export let isBig: boolean = false;
</script>

{#if !isBig}
  <button class=" {isBorder ? 'btn-border' : 'default'}" on:click>
    <img
      class="{isBorder ? 'border-size' : 'default-size'}"
      src="{image}"
      alt="MemberIcon"
    />
    <slot />
  </button>
{/if}

{#if isBig}
  <button
    class="border border-blue-300 bg-blue-50 rounded-md w-[8rem] h-[8rem] text-blue-500 font-bold"
    on:click
  >
    <img class="ml-4 w-[6rem] h-[6rem]" src="{image}" alt="MemberIcon" />
    <slot />
  </button>
{/if}

<style>
  .btn-border {
    @apply border border-blue-500  bg-blue-50  rounded-md w-[5rem] h-[5rem] text-blue-500 font-bold;
  }
  .border-size {
    @apply ml-4 w-[3rem] h-[3rem];
  }
  .default {
    @apply text-blue-800 font-bold text-[0.7rem] w-[3.9rem] h-[3.9rem] rounded-md;
  }
  .default-size {
    @apply ml-2 w-[2.8rem] h-[2.8rem];
  }
</style>
