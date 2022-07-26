#!/bin/sh
git add dist -f
git subtree push --prefix dist origin gh-pages
rm -rf dist