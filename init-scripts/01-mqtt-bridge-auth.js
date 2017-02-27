conn = new Mongo();
db = conn.getDB("iottly");

res = db.boardsMqttTopics.insertOne({topics:[commandTopic]});

db.boardsMqttAuth.update(
	{username:bridgeUser},
	{username:bridgeUser, password:bridgeEncPwd, topics:res.insertedId, superuser:0}, { upsert: true }
	)
