#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1

echo
echo 'About to call information() on the contract'
echo
echo
echo 'SHOWING INFORMATION ABOUT APPOINTMENT DETAILS FOR THIS ACCOUNT'
echo
echo
echo "CONTRACT is [ $CONTRACT ]"
echo "OWNER is [ $OWNER ]"
echo
echo

near call $CONTRACT information '{}' --accountId $OWNER

echo
echo
