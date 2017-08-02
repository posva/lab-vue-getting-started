#!/bin/bash

echo "🚀 Let's go with $1!"
pwd
ls
echo '---'
source debug.sh
echo '---'
echo "TECHIO> open --static-dir /project/target/$1 /index.html"
