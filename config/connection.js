const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(`mongodb+srv://@clusterkly.xf6nefj.mongodb.net/SocialDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
