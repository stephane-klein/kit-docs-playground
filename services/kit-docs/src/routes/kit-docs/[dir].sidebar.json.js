import { createSidebarRequestHandler } from '@svelteness/kit-docs/node';

export const get = createSidebarRequestHandler({
  resolveCategory: (data) => {
    return data.frontmatter?.category ?? null;
  }
});
