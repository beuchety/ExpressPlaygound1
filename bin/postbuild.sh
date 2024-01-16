#!/bin/bash

CONFIG_DIR=./.amplify-hosting

echo "removing ./.amplify-hosting dir"
rm -rf $CONFIG_DIR

echo "create computer dir"
mkdir -p $CONFIG_DIR/compute

echo "copy dist dir"
cp -r ./dist ./.amplify-hosting/compute/default
echo "copy node_modules"
cp -r ./node_modules $CONFIG_DIR/compute/default/node_modules

cp -r ./views $CONFIG_DIR/compute/default/views

echo "copy public dir"
cp -r public $CONFIG_DIR/static

echo "copy deploy-manifest"
cp deploy-manifest.json $CONFIG_DIR/deploy-manifest.json