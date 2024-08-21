<script lang="ts">
  export let han: number;
  export let value: number;
  export let isClick = false;

  function handleClick() {
    isClick = !isClick;
    if (isClick) {
      han += value;
    } else {
      han -= value;
    }
  }
</script>

<button
  class:btn-primary="{!isClick}"
  class:btn-primary-on="{isClick}"
  on:click="{handleClick}"
>
  <slot />
</button>
