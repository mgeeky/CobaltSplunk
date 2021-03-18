#!/usr/bin/bash

SPLUNK_BIN=/opt/splunk/bin/splunk
USERNAME=admin
PASSWORD=MojMalySplunk

$SPLUNK_BIN remove app cobalt -auth "$USERNAME:$PASSWORD"
$SPLUNK_BIN stop

rm -rf /opt/splunk/etc/apps/cobalt
pushd /opt/CobaltSplunk
rm Cobalt.spl
tar -czvf Cobalt.spl cobalt/
$SPLUNK_BIN start
$SPLUNK_BIN install app Cobalt.spl -update 1 -auth "$USERNAME:$PASSWORD"
$SPLUNK_BIN restart
popd
