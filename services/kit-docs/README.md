# Getting started

Install https://github.com/stephane-klein/kit-docs/tree/sklein-upgrade-svelte-kit-from-370-to-371

```sh
$ mkdir -p ../../github.com/svelteness/kit-docs/
$ git clone git@github.com:stephane-klein/kit-docs.git ../../github.com/svelteness/kit-docs/
$ (cd ../../github.com/svelteness/kit-docs/; git fetch --all; git switch sklein-upgrade-svelte-kit-from-370-to-371)
$ (cd ../../github.com/svelteness/kit-docs/; pnpm install)
```

```sh
$ pnpm install
$ pnpm link ../../github.com/svelteness/kit-docs/packages/kit-docs
$ pnpm run dev
```

Go to http://127.0.0.1:3000
