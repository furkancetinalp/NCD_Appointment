#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1

echo
echo 'About to call changeDay() on the contract'
echo 
echo
echo 'ATTEMPTING TO CHANGE THE APPOINTMENT DATE!!!!'
echo
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER
echo
echo \$1 is [ $1 ] '(new day)'

near call $CONTRACT changeDay '{"day":'$1'}' --account_id $OWNER 

