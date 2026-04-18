import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import eslint from '@eslint/js'
import globals from 'globals'
import svelte from 'eslint-plugin-svelte'
import tseslint from 'typescript-eslint'
import svelteConfig from './svelte.config.js'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...svelte.configs['flat/recommended'],
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['scripts/**/*.ts'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: './scripts/tsconfig.json',
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: tseslint.parser,
        svelteConfig,
      },
    },
  },
)
