#!/usr/bin/env sh

yarn run build
echo "www.maelstrom-cms.com" > ./docs/CNAME
git add .
git commit -m "🚀 Documentation updated"
git push
