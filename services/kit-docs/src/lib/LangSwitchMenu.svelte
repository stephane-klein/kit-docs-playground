<script lang="ts">
  import { Menu, MenuItem } from '@svelteness/kit-docs';
  import { frontmatter } from '@svelteness/kit-docs';
  import { t } from '$lib/translations';
</script>

<Menu>
    <svelte:fragment slot="button">
        {$t(`lang?.${$frontmatter.current_lang}`) ?? $frontmatter.current_lang}
        <span class="sr-only">{$t(`lang?.${$frontmatter.current_lang}`) ?? $frontmatter.current_lang}</span>
    </svelte:fragment>

    {#each Object.entries($frontmatter.lang) as [lang, url]}
        <MenuItem><a href="{url}">{$t(`lang.${lang}`)}</a></MenuItem>
    {/each}
</Menu>
