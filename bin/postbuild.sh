#!/bin/bash

echo "removing ./.amplify-hosting dir"
rm -rf ./.amplify-hosting

echo "create computer dir"
mkdir -p ./.amplify-hosting/compute

echo "copy dist dir"
cp -r ./dist ./.amplify-hosting/compute/default
echo "copy node_modules"
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

echo "copy public dir"
cp -r public ./.amplify-hosting/static

echo "copy deploy-manifest"
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json