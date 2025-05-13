import { defineConfig } from 'eslint/config'
import standardJs from '@seungwoo321/eslint-plugin-standard-js'
import standardJsx from '@seungwoo321/eslint-plugin-standard-jsx'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    ignores: ['dist']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    extends: [
      ...tseslint.configs.recommended,
      ...standardJs.configs.recommended,
      ...standardJsx.configs.recommended
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
])
