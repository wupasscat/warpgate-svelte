<script lang="ts">
  import '../app.css';

  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, Footer, FooterCopyright, FooterLinkGroup, FooterLink, Listgroup, ListgroupItem } from 'flowbite-svelte';
  import Icon from '@iconify/svelte';

  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2 absolute bottom-10 right-10';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Warpgate
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="https://wg.wupass.xyz/docs" target="_blank">API</NavLi>
		<NavLi href="https://github.com/ps2warpgate/website" target="_blank"><Icon icon="mdi:github" height="auto" /></NavLi>
	</NavUl>
</Navbar>

<slot />



<DarkMode {btnClass} />

<Footer class="mx-10">
	<FooterCopyright href="https://github.com/orgs/ps2warpgate/people" by="wupasscat" year={2023} />
	<!-- <p class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
		PlanetSide and PlanetSide 2 are registered trademarks of 
		<a class="hover:underline hover:dark:text-gray-300" href="https://www.daybreakgames.com">Daybreak Game Company LLC</a>
	</p> -->
	<FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
	  <FooterLink href="/about">About</FooterLink>
	  <FooterLink href="https://wg.wupass.xyz/docs" target="_blank">API</FooterLink>
	  <FooterLink href="/changelog">Change Log</FooterLink>
	  <FooterLink href="https://github.com/ps2warpgate" target="_blank"><Icon icon="mdi:github" height="auto" /></FooterLink>
	</FooterLinkGroup>
</Footer>