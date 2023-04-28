<script lang="ts">
	import Icon from '@iconify/svelte';
	import World from '$lib/World.svelte';
  

	let world_ids = [1, 10, 13, 17, 19, 40];
</script>

<div class="text-center">
	<h1 class="pt-2 text-2xl font-bold dark:text-white">Server Status</h1>
	<p class="py-2 text-base dark:text-gray-300">Currently under construction</p>
</div>

{#each world_ids as world_id}
	<World {world_id} />
{/each}

<style lang="postcss">
	/* :global(html) {
    background-color: theme(colors.gray.100);
  } */
</style>
