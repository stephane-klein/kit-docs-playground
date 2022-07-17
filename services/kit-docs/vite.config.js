import { sveltekit } from '@sveltejs/kit/vite';
import kitDocs from '@svelteness/kit-docs/node';
import Icons from 'unplugin-icons/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
        Icons({ compiler: 'svelte' }),
        kitDocs(),
        sveltekit()
    ]
};

export default config;
