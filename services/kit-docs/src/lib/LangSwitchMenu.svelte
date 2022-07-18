<script lang="ts">
  import { Menu, MenuItem } from '@svelteness/kit-docs';
</script>

aaa
<Menu>
    <svelte:fragment slot="button">
        <span class="sr-only">FR</span>
    </svelte:fragment>

    <MenuItem>English</MenuItem>
    <MenuItem>French</MenuItem>
</Menu>
