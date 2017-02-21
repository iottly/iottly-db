conn = new Mongo();
db = conn.getDB("iottly");

db.boardsMqttTopics.update({_id:0},{_id:0, topics:[commandTopic]},{ upsert: true })

db.boardsMqttAuth.update({username:bridgeUser},{username:bridgeUser, password:bridgeEncPwd, topics:0, superuser:0},{ upsert: true })
