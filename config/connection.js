const { connect, connection } = require('mongoose');
require('dotenv').config();
url = process.env.URL || 'mongodb://localhost/social-network-api';
connect(`${url}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
