#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1


echo
echo 'About to call add() on the contract to make an appointment date'
echo
echo 'ATTEMPT TO MAKE AN APPOINTMENT DATE'
echo
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER

echo \$1 is [ $1 ] '(name)'
echo \$2 is [ $2 ] '(age)'
echo \$3 is [ $3 ] '(day)'
echo

near call $CONTRACT appoint '{"name":"'$1'", "age": '$2', "day":'$3'}' --account_id $OWNER 



