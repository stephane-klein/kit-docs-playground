<script context="module">
  export const prerender = true;

  export const load = async ({ url, fetch }) => {
    const match = url.pathname.match(/(?<left_part>^\/docs\/)(?<lang>\w{2})(?<right_part>\/.*$)/)
    const meta = await loadKitDocsMeta(url.pathname, { fetch });
    meta.frontmatter.current_lang = match.groups.lang;
    if (!meta.frontmatter.lang) {
        meta.frontmatter.lang = {}
    }

    ['fr', 'en', 'de', 'es'].forEach(lang => {
        if (!meta.frontmatter.lang[lang]) {
            meta.frontmatter.lang[lang] = `${match.groups.left_part}${lang}${match.groups.right_part}`;
        }
    });

    return {
      props: {
        meta,
        sidebar: await loadKitDocsSidebar(
            {
              '/': null,
              '/docs/en/': '/docs/en/',
              '/docs/fr/': '/docs/fr/'
            },
            { url, fetch }
        )
      }
    };
  };
</script>

<script>
  import '@svelteness/kit-docs/client/polyfills/index.js';
  import '@svelteness/kit-docs/client/styles/normalize.css';
  import '@svelteness/kit-docs/client/styles/fonts.css';
  import '@svelteness/kit-docs/client/styles/theme.css';
  import '@svelteness/kit-docs/client/styles/vars.css';

  import { page } from '$app/stores';
  import SvelteLogo from '$img/svelte-horizontal.svg?raw';

  import {
    Button,
    KitDocs,
    KitDocsLayout,
    createKitDocsLoader,
    loadKitDocsMeta,
    loadKitDocsSidebar,
    createSidebarContext,
  } from '@svelteness/kit-docs';

  import LangSwitchMenu from '$lib/LangSwitchMenu.svelte';

  /** @type {import('@svelteness/kit-docs').MarkdownMeta | null} */
  export let meta = null;

  /** @type {import('@svelteness/kit-docs').ResolvedSidebarConfig | null} */
  export let sidebar = null;

  const i18n = {
      lang: {
        fr: 'French',
        en: 'English'
      }
  };

  /** @type {import('@svelteness/kit-docs').NavbarConfig} */
  const navbar = {
    links: [{ title: 'Documentation', slug: '/docs', match: /\/docs/ }],
  };

  const { activeCategory } = createSidebarContext(sidebar);

  $: category = $activeCategory ? `${$activeCategory}: ` : '';
  $: title = meta ? `${category}${meta.title} | KitDocs` : null;
  $: description = meta?.description;
</script>

<svelte:head>
  {#key $page.url.pathname}
    {#if title}
      <title>{title}</title>
    {/if}
    {#if description}
      <meta name="description" content={description} />
    {/if}
  {/key}
</svelte:head>

<KitDocs {meta}>
  <KitDocsLayout {navbar} {sidebar} {i18n}>
    <div class="logo" slot="navbar-left">
      <Button href="/">
        {@html SvelteLogo}
      </Button>
    </div>

    <slot />
    <div slot="navbar-right-alt">
        <LangSwitchMenu />
    </div>
  </KitDocsLayout>
</KitDocs>

<style>
  :global(:root) {
    --kd-color-brand-rgb: 233, 127, 6;
  }

  :global(:root.dark) {
    --kd-color-brand-rgb: 213, 149, 76;
  }

  .logo :global(a) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo :global(svg) {
    height: 36px;
    overflow: hidden;
  }
</style>
