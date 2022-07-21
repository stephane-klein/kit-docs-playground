<script lang="ts">
  import { Menu, MenuItem } from '@svelteness/kit-docs';
  import { frontmatter } from '@svelteness/kit-docs';
</script>

<Menu>
    <svelte:fragment slot="button">
        {$frontmatter.current_lang}
        <span class="sr-only">{$frontmatter.current_lang}</span>
    </svelte:fragment>

    {#each Object.entries($frontmatter.lang) as [lang, url]}
        <MenuItem><a href="{url}">{lang}</a></MenuItem>
    {/each}
</Menu>
