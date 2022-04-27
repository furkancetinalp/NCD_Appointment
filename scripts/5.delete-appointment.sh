#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1

set -e

echo
echo 'About to call del() on the contract'
echo
echo
echo 'REMOVING APPOINTMENT RECORD FOR THIS ACCOUNT!!!'
echo
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER
echo

near call $CONTRACT del '{}' --accountId $OWNER