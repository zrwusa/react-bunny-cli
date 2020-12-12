#!/usr/bin/env bash
set -e


npm config get registry
npm config set registry=http://registry.npmjs.org

echo 'login'
npm login

echo "publishing..."
npm publish


echo -e "\n published \n"
exit
