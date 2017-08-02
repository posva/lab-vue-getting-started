#!/bin/bash

echo "🚀 Let's go with $1!"
if [ -s debug.sh ]; then
    echo '--- 🐛 sourcing debug.sh ---'
    source debug.sh
    echo '--- end of debug.sh ---'
fi
echo "TECHIO> open --static-dir /project/target/$1 /index.html"
