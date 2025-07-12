#!/bin/bash

# Get the absolute path to the nodejs/bin directory
NODE_PATH="$(cd "$(dirname "$0")/nodejs/bin" && pwd)"

# Add it to the front of PATH
export PATH="$NODE_PATH:$PATH"

# Optional: confirm it's set
which node
which npm
node -v
npm -v