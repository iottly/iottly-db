conn = new Mongo();
db = conn.getDB("iottly");

db.boardsMqttTopics.insert({_id:0, topics:["/iottly/+/+/commands"]})

db.boardsMqttAuth.update({username:"mosq-bridge"},{username:"mosq-bridge", password:"PBKDF2$sha256$901$G3BatbMS88ks2gpx$h2V+ufI7/UM6XjeJMHBSdQGPkdwjdWgh", topics:0, superuser:0},{ upsert: true })

