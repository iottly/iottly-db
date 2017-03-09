conn = new Mongo();
db = conn.getDB("iottly");

res = db.boardsMqttTopics.insertOne({topics:[posthttpTopic]});

db.boardsMqttAuth.update(
	{username:posthttpUser},
	{username:posthttpUser, password:'', topics:res.insertedId, superuser:0}, { upsert: true }
	);

