<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Tooltip, Indicator, Badge } from 'flowbite-svelte'

  export let world_id: number

  async function getWorld(world_id: number) {
		const response = await fetch(`https://wg.wupass.xyz/worlds/?id=${world_id}`)
		const world = await response.json()
		return world
  }

  let promise = getWorld(world_id)

  const world_names = new Map<number, string>([
		[1, 'Connery'],
    [10, 'Miller'],
    [13, 'Cobalt'],
    [17, 'Emerald'],
    [19, 'Jaeger'],
    [40, 'SolTech'],
  ])

	const zones = ['Amerish', 'Esamir', 'Hossin', 'Indar', 'Oshur']
</script>

{#await promise then data}
<div class="container rounded-xl border border-gray-700 dark:border-white p-5 sm:mx-5 md:mx-10 lg:mx-50 my-2">
	<div class="mb-2 inline-flex text-gray-500 dark:text-gray-400">
		<!-- World name -->
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{world_names.get(world_id)}</h5>
		<!-- World population -->
		<div class="mt-1.5 inline-flex pl-10">
			<p class="text-2xl"><Icon icon="material-symbols:group" inline={true} /></p>
			<p class="pl-1">{data.population.total}</p>
		</div>
		<!-- Population tooltip -->
		<Tooltip placement="right">
			<p class="text-gray-500 dark:textgray-400"><b class="text-blue-500">NC:</b> {data.population.nc}</p>
			<p class="text-gray-500 dark:textgray-400"><b class="text-red-500">TR:</b> {data.population.tr}</p>
			<p class="text-gray-500 dark:textgray-400"><b class="text-purple-500">VS:</b> {data.population.vs}</p>
		</Tooltip>
	</div>
	<!-- Continent status -->
	<div class="flex flex-row">
		<div class="order-1">
			<h6 class="text-md mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
				Continents
			</h6>
			<ul class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 w-full">
				{#each zones as zone}
				<li class="py-3 sm:py-4">
					<div class="flex items-center space-x-3">
						<div class="flex-1 min-w-0">
							<p class="text-sm font-semibold text-gray-600 dark:text-gray-300 truncate">{zone}</p>
						</div>
						{#if data.continents[zone] == 'open'}
						<Badge color="green" rounded class="px-2.5 py-0.5">
							<Indicator color="green" size="xs" class="mr-1"/>Open
						</Badge>
						{:else}
						<Badge color="red" rounded class="px-2.5 py-0.5">
							<Indicator color="red" size="xs" class="mr-1"/>Closed
						</Badge>
						{/if}
					</div>
				</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
{/await}

