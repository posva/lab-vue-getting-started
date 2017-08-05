#!/bin/bash

echo "🚀 Let's go with $1!"
cd "$1" && ../node_modules/.bin/webpack -d --progress --config=../webpack.config.js ; cd ..
cd "$1" && ../node_modules/.bin/karma start ../karma.conf.js --single-run; cd ..
if [ -s debug.sh ]; then
    echo '--- 🐛 sourcing debug.sh ---'
    source debug.sh
    echo '--- end of debug.sh ---'
fi
echo "TECHIO> open --static-dir /project/target/$1/dist /index.html"
