<script lang="ts">
  import { AccordionItem, Accordion, Card } from 'flowbite-svelte'
  import Icon from '@iconify/svelte';

  export let data
</script>

<h1 class="text-2xl pt-2 mx-10 font-bold dark:text-white">Welcome to SvelteKit</h1>
<p class="text-base py-2 mx-10 dark:text-gray-300">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="container md:mx-10 sm:mx-5 border border-white rounded-xl p-5">
  <div class="mb-2 text-gray-500 dark:text-gray-400 inline-flex">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connery</h5>
    <div class="inline-flex pl-10 mt-1.5">
      <p class="text-2xl"><Icon icon="material-symbols:group" inline={true} /></p>
      <p class="pl-1">{data.population.total}</p>
    </div>
  </div>
  <div class="flex flex-row">
    <div class="order-1">
      <h6 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-gray-300">Continents</h6>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Amerish: {data.continents.Amerish}</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Esamir: {data.continents.Esamir}</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Hossin: {data.continents.Hossin}</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Indar: {data.continents.Indar}</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Oshur: {data.continents.Oshur}</p>
    </div>
  </div>
</div>

<style lang="postcss">
  /* :global(html) {
    background-color: theme(colors.gray.100);
  } */
</style>
