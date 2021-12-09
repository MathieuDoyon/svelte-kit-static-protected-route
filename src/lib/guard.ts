import { get } from 'svelte/store';

import { loggedIn } from '$lib/stores/user';

const isClient = typeof window !== 'undefined';

export function authGuard({ page }): any {
	const isLoggedIn = get(loggedIn);

	if (!isClient) {
		return {};
	}

	if (isLoggedIn && page.path === '/login') {
		return { status: 302, redirect: '/' };
	} else if (!isLoggedIn && page.path !== '/login') {
		return { status: 302, redirect: '/login' };
	}

	return {};
}
