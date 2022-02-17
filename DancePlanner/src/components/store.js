import { writable } from 'https://cdn.skypack.dev/svelte/store';

export let dancestyleSearchStore = writable("");
export let citynamesSearchStore = writable("");
export let rangeStore = writable(10);