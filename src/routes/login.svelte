<script context="module" lang="ts">
	import { authGuard } from '$lib/guard';

	export async function load({ page }) {
		return await authGuard({ page });
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	import { loggedIn } from '$lib/stores/user';
	// import { page } from '$app/stores';
	// import NavBar from '../components/NavBar.svelte';
	// import TopNav from '../components/TopNav.svelte';

	// let currentPage;

	// page.subscribe((path) => (currentPage = path));
	const handleLogin = () => {
		loggedIn.set(!$loggedIn);

		goto('/');
	};
</script>

<div><button on:click={handleLogin}>login</button></div>
