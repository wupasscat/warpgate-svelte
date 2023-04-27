<script lang="ts">
	import Icon from '@iconify/svelte';

  export const load = async ({ fetch }) => {
    try {
      const response = await fetch(
        'https://wg.wupass.xyz/worlds/?id=1'
      )
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      const world = await response.json()
      return world
    } 
    catch (error) {
      console.error(error)
      return { error: 'Unable to fetch world' }
    }
  }
</script>

<div class="container rounded-xl border border-white p-5 sm:mx-5 md:mx-10">
	<div class="mb-2 inline-flex text-gray-500 dark:text-gray-400">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connery</h5>
		<div class="mt-1.5 inline-flex pl-10">
			<p class="text-2xl"><Icon icon="material-symbols:group" inline={true} /></p>
			<p class="pl-1">{world.population.total}</p>
		</div>
	</div>
	<div class="flex flex-row">
		<div class="order-1">
			<h6 class="text-md mb-2 font-bold tracking-tight text-gray-900 dark:text-gray-300">
				Continents
			</h6>
			<p class="mb-2 text-gray-500 dark:text-gray-400">Amerish: {world.continents.Amerish}</p>
			<p class="mb-2 text-gray-500 dark:text-gray-400">Esamir: {world.continents.Esamir}</p>
			<p class="mb-2 text-gray-500 dark:text-gray-400">Hossin: {world.continents.Hossin}</p>
			<p class="mb-2 text-gray-500 dark:text-gray-400">Indar: {world.continents.Indar}</p>
			<p class="mb-2 text-gray-500 dark:text-gray-400">Oshur: {world.continents.Oshur}</p>
		</div>
	</div>
</div>
