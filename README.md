# 워크플로우로 PR 요청하기

```yaml
name: Create Release PR

on:
  push:
    branches:
      - main

jobs:
  create-release-pr:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write

    steps:
      - uses: actions/checkout@v4
        with:
          ref: release

      - name: Reset main branch
        run: |
          git fetch origin main:main
          git reset --hard main
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v7
        with:
          branch: main-to-release
          commit-message: "chore: sync main to release"
          title: 'chore: sync main to release'
          body: |
            이 PR은 메인 브랜치의 변경사항을 릴리즈 브랜치로 동기화합니다.
            
            이 PR이 머지되면 릴리즈 워크플로우가 자동으로 트리거됩니다.
          delete-branch: true

```