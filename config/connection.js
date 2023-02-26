const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(``, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
