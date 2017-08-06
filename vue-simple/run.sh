#!/bin/bash

# Put "-s" as a second parameter to simply run without tests
if  [[ $2 = "-s" ]]; then
    echo "Option -s turned on"
    echo "TECHIO> open -s /project/target/$1 index.html"
else
    echo "🚀 Let's go with $1!"
    cd "$1" && ../node_modules/.bin/webpack -d --progress --config=../webpack.config.js ; cd ..
    echo "TECHIO> open --static-dir /project/target/$1/dist /index.html"
    if cd "$1" && ../node_modules/.bin/karma start ../karma.conf.js --single-run; then
        GOOD=true
    else
        GOOD=false
    fi

    cd ..
    echo "TECHIO> success $GOOD"

    if [ -s debug.sh ]; then
        echo '--- 🐛 sourcing debug.sh ---'
        source debug.sh
        echo '--- end of debug.sh ---'
    fi

fi


