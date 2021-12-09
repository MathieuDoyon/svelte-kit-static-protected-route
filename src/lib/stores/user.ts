import { writable } from 'svelte/store';

const isClient = typeof window !== 'undefined';

const isLoggedInStorage = isClient ? localStorage.getItem('isLoggedIn') === 'true' : false;

export const loggedIn = writable(isLoggedInStorage, () => {
	console.log('got a subscriber');

	return () => console.log('no more subscribers');
});

loggedIn.subscribe((value: boolean) => {
	if (isClient) {
		localStorage.setItem('isLoggedIn', String(value));
	}
});
