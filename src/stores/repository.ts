import { writable } from 'svelte/store';

export const repositoryUrl = writable<string>('');
export const yamlData = writable<any>(null);
export const codeSmells = writable<any[]>([]);
