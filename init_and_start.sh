# this is a great hack: polling the logs to know when mongod is ready to accept connections:
# https://groups.google.com/d/msg/mongodb-user/_Uamu6piOBc/wHITN0swUYsJ

mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db/ \
	&& until grep -q -m 1 "waiting for connections on port 27017" /var/log/mongodb.log; do sleep .1; echo "... waiting for MongoDB to start ..."; done \
	&& INIT_FILES=/init-scripts/*.js \
	&& for f in $INIT_FILES; do mongo --eval "var bridgeEncPwd='${MQTT_BRIDGE_ENC_PWD}', bridgeUser='${MQTT_BRIDGE_USERNAME}', commandTopic='${MQTT_COMMAND_TOPIC}'" $f; echo $f; done \
	&& mongod --shutdown \

mongod
