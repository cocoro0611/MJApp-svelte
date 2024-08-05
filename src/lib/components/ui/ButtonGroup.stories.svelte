<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';

	import ButtonGroup from './ButtonGroup.svelte';

	export const meta: Meta<ButtonGroup> = {
		title: 'UI/ButtonGroup',
		component: ButtonGroup,
	};
</script>

<script>
	import { Story } from '@storybook/addon-svelte-csf';
</script>

<Story name="Default">
	<p><ButtonGroup>filled</ButtonGroup></p>
</Story>
