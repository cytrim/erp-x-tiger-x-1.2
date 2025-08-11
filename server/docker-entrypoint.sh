#!/bin/sh
set -e
node src/lib/wait-for-mongo.js
node src/index.js
