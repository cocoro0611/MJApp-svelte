<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled = false;
	export let flat = false;
	export let variant: 'primary' | 'secondary' | 'fine' | 'info' | 'danger' | 'cancel' = 'primary';
</script>

<button
	{type}
	{...$$restProps}
	class="{$$props.class || ''} {variant} truncate"
	class:filled={!flat}
	class:borderless={flat}
	class:with-icon={!!$$slots.icon && !!$$slots.default}
	class:icon-only={!!$$slots.icon && !$$slots.default}
	{disabled}
	on:click
>
	{#if $$slots.icon}
		<slot name="icon" />
	{/if}
	<slot />
</button>
