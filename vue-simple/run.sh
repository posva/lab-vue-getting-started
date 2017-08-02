#!/bin/bash

echo "🚀 Let's go with $1!"
if [ -s debug.sh ]; then
    echo '--- 🐛 sourcing debug.sh ---'
    source debug.sh
    echo '--- end of debug.sh ---'
fi
echo "TECHIO> open 5000 --static-dir /project/target/$1 /index.html"

./node_modules/.bin/serve -p 5000 "$1" &
SPID="$!"
sleep 1

curl 'http://localhost:5000'
kill "$SPID"
# ./node_modules/.bin/codeceptjs run --steps -o "{\"tests\": \"$1/test.js\"}"
