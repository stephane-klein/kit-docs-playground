# KitDocs playground

KitDocs: https://github.com/svelteness/kit-docs/

Parent issue: https://github.com/stephane-klein/personnal-notebook/issues/23

This repository is configured like a [monorepo](https://en.wikipedia.org/wiki/Monorepo):

- the documentation engine service (powered by KitDocs) is in [`services/kit-docs/`](./services/kit-docs/)
- the documentation is in `docs/` (it is a relative symbolic link to `services/kit-docs/src/routes/docs/`

