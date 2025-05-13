# React 19 + TypeScript + Vite + ESLint 9.x + Standard rule

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4e57968-eb20-4de8-91c4-001474804566/deploy-status)](https://vite-react-ts-standard.netlify.app/)

> English | [한국어](./README.ko.md)  

This template is a modified version of the default Vite React + TypeScript template, with ESLint 9.x and Standard rules added. It includes Hot Module Replacement (HMR) and basic development setup.

## Added Features

- **ESLint 9.x**: Integrated with the latest version of ESLint
- **Standard rule**: Consistent code style via `@seungwoo321/eslint-plugin-standard-js` and `@seungwoo321/eslint-plugin-standard-jsx`

All other features are the same as the default Vite React + TypeScript template.

## React + Vite

Two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Extending ESLint Configuration

For production apps, it's recommended to enable type-aware lint rules by updating your config:

```js
import { defineConfig } from 'eslint/config'
import standardJs from '@seungwoo321/eslint-plugin-standard-js'
import standardJsx from '@seungwoo321/eslint-plugin-standard-jsx'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: ['eslint.config.js'],
    extends: [
      // Replace ...tseslint.configs.recommended with:
      ...tseslint.configs.recommendedTypeChecked,
      // Or use stricter rules with:
      ...tseslint.configs.strictTypeChecked,
      // Add stylistic rules if needed:
      ...tseslint.configs.stylisticTypeChecked,
      // Keep the Standard rules:
      ...standardJs.configs.recommended,
      ...standardJsx.configs.recommended
    ],
    languageOptions: {
      // Additional options...
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
])
```
