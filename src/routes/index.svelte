<script context="module" lang="ts">
	import { authGuard } from '$lib/guard';

	export async function load({ page }) {
		return authGuard({ page });
	}

	// do not generate html content of this page on build
	// or use svelte.config.js to set `ssr: false` for every pages
	export const ssr = false;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	import { loggedIn } from '$lib/stores/user';

	const handleLogout = () => {
		loggedIn.set(!$loggedIn);

		goto('/login');
	};
</script>

<div class="warning">Protected Page</div>
<button on:click={handleLogout}>logout</button>

<style>
	.warning {
		background-color: #fcf8e3;
		border-color: #faebcc;
		color: #8a6d3b;
		padding: 2em;
		margin-bottom: 20px;
		font-weight: 600;
		font-size: 1.65em;

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
