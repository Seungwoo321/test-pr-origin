# React 19 + TypeScript + Vite + ESLint 9.x + Standard JS

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4e57968-eb20-4de8-91c4-001474804566/deploy-status)](https://vite-react-ts-standard.netlify.app/)

> [English](./README.md) | 한국어  

이 템플릿은 기본 Vite의 React + TypeScript 템플릿에 ESLint 9.x와 Standard 규칙이 추가된 버전입니다. HMR(Hot Module Replacement)과 기본적인 개발 환경 설정을 제공합니다.

## 추가된 기능

- **ESLint 9.x**: 최신 버전의 ESLint 통합
- **Standard JS**: `@seungwoo321/eslint-plugin-standard-js`와 `@seungwoo321/eslint-plugin-standard-jsx` 플러그인을 통한 일관된 코드 스타일 적용

나머지 기능은 기본 Vite React + TypeScript 템플릿과 동일합니다.

## React + Vite

현재 두 가지 공식 플러그인이 제공됩니다:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)는 Fast Refresh를 위해 [Babel](https://babeljs.io/)을 사용합니다.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)는 Fast Refresh를 위해 [SWC](https://swc.rs/)를 사용합니다.

## ESLint 구성 확장하기

프로덕션 애플리케이션을 개발하는 경우, 타입 인식 린트 규칙을 활성화하기 위해 구성을 업데이트하는 것을 권장합니다:

```js
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
      // ...tseslint.configs.recommended 대신 아래 내용으로 교체하세요
      ...tseslint.configs.recommendedTypeChecked,
      // 또는 더 엄격한 규칙을 위해 다음을 사용하세요
      ...tseslint.configs.strictTypeChecked,
      // 스타일 관련 규칙을 추가하려면 다음을 사용하세요
      ...tseslint.configs.stylisticTypeChecked,
      // Standard 규칙은 유지합니다
      ...standardJs.configs.recommended,
      ...standardJsx.configs.recommended
    ],
    languageOptions: {
      // 다른 옵션들...
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
])
```
