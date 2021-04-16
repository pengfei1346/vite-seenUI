#!/usr/bin/env sh
set -e
yarn build
cd dist

git init
git add -A
git commit -m 'deploy: 发布到 gh-pages'

git push -f https://github.com/pengfei1346/seen-ui-vite.git master:gh-pages

cd -
