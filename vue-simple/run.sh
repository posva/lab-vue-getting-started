#!/bin/bash

echo "🚀 Let's go with $1!"
if [ -s debug.sh ]; then
    echo '--- 🐛 sourcing debug.sh ---'
    source debug.sh
    echo '--- end of debug.sh ---'
fi
echo "TECHIO> open -p 5000 --static-dir /project/target/$1 /index.html"
curl 'http://localhost:5000'
# ./node_modules/.bin/codeceptjs run --steps -o "{\"tests\": \"$1/test.js\"}"
