import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  compilerOptions: {
    enableSourcemap: true,
  },

  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
      entries: [
        '/',
        '/docs/en/',
        '/docs/fr/'
      ],
    }
  },
};

export default config;
