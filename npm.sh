#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Run node with the real path to npm-cli.js
"$SCRIPT_DIR/nodejs/bin/node" "$SCRIPT_DIR/nodejs/lib/node_modules/npm/bin/npm-cli.js" "$@"