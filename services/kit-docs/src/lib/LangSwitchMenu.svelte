<script lang="ts">
  import { Menu, MenuItem } from '@svelteness/kit-docs';
  import { frontmatter } from '@svelteness/kit-docs';
  import { getI18nContext } from '@svelteness/kit-docs';
  const i18n = getI18nContext();
</script>

<Menu>
    <svelte:fragment slot="button">
        {i18n.lang?.[$frontmatter.current_lang] ?? $frontmatter.current_lang}
        <span class="sr-only">{i18n.lang?.[$frontmatter.current_lang] ?? $frontmatter.current_lang}</span>
    </svelte:fragment>

    {#each Object.entries($frontmatter.lang) as [lang, url]}
        <MenuItem><a href="{url}">{i18n.lang?.[lang] ?? lang}</a></MenuItem>
    {/each}
</Menu>
