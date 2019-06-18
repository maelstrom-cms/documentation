#!/usr/bin/env sh

yarn run build
cp ./.vuepress/CNAME ./docs/CNAME
git add .
git commit -m "🚀 Documentation updated"
git push
