#!/usr/bin/env bash
set -e


npm config get registry
npm config set registry=http://registry.npmjs.org

echo 'login'
npm login

echo "publishing..."
npm publish


npm config set registry=https://registry.npm.taobao.org
echo -e "\n published \n"
exit
