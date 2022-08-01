import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  compilerOptions: {
    enableSourcemap: true,
  },

  preprocess: preprocess({
    sourceMap: true
  }),

  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
      entries: ['*'],
    }
  },
};

export default config;
