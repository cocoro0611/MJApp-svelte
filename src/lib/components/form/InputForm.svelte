<script lang="ts">
  export let type: "text" | "number" = "text";
  export let name: string;
  export let value: string | number = "";
  export let placeholder: string = "";
  export let maxlength: number | undefined = undefined;

  let inputValue: string = typeof value === "number" ? value.toString() : value;
  let currentLength = inputValue.length;

  function handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    inputValue = input.value;
    currentLength = inputValue.length;
    value = type === "number" ? Number(inputValue) : inputValue;
  }

  $: if (typeof value === "number") {
    inputValue = value.toString();
  } else {
    inputValue = value;
  }
  $: currentLength = inputValue.length;
</script>

<div class="relative flex items-center">
  {#if $$slots.left}
    <div class="absolute left-3">
      <slot name="left" />
    </div>
  {/if}

  <input
    {type}
    {name}
    {placeholder}
    {maxlength}
    value="{inputValue}"
    on:input="{handleInput}"
    class="w-full border border-blue-500 rounded-md form-action
           {$$slots.left ? 'pl-8' : 'pl-3'} 
           {$$slots.right ? 'pr-8' : 'pr-3'} 
           py-2"
  />

  {#if $$slots.right}
    <div class="absolute right-3">
      <slot name="right" />
    </div>
  {/if}
</div>

<style>
  .form-action {
    @apply focus:outline-none focus:ring-1 focus:ring-blue-500;
  }
</style>
