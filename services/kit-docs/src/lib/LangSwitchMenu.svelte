<script lang="js">
  import { Menu, MenuItem } from '@svelteness/kit-docs';
  import { frontmatter } from '@svelteness/kit-docs';
  import { getI18nContext } from '@svelteness/kit-docs';
  const { t, locale } = getI18nContext();
</script>

<Menu>
    <svelte:fragment slot="button">
        {$t(`lang.${$frontmatter.current_lang}`, {fallbackValue: $frontmatter.current_lang})}
        <span class="sr-only">{$t(`lang.${$frontmatter.current_lang}`, {fallbackValue: $frontmatter.current_lang})}</span>
    </svelte:fragment>

    {#each Object.entries($frontmatter?.lang ?? []) as [lang, url]}
        <MenuItem><a href="{url}">{$t(`lang.${lang}`)}</a></MenuItem>
    {/each}
</Menu>
