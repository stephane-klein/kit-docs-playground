module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  ignorePatterns: [
    'packages/kit-docs/client',
    'packages/kit-docs/node',
    'packages/kit-docs/index.d.ts',
    'packages/kit-docs/globals.d.ts',
  ],
  plugins: ['import', 'svelte3', '@typescript-eslint', 'simple-import-sort'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'default-case': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: [
          'tsconfig.json',
          'demo/tsconfig.json',
          'packages/kit-docs/tsconfig.json',
          'packages/kit-docs/src/node/tsconfig.json',
        ],
      },
    },
    'svelte3/typescript': () => require('typescript'),
  },
};
