<script lang="ts">
  import { Menu, MenuItem } from '@svelteness/kit-docs';
</script>

aaa
<Menu>
    <svelte:fragment slot="button">
        French
        <span class="sr-only">French</span>
    </svelte:fragment>

    <MenuItem><a href="/">English</a></MenuItem>
    <MenuItem><a href="/">French</a></MenuItem>
</Menu>
