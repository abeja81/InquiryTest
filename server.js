// init the server

require('dotenv').config();

// init mongoose

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log(('Mongoose connection open'));
  })
  .on('error', (err) => {
    console.log(`'Connection error: ${err.message}'`);
  });

require('./models/Inguiry');

const app = require('./app');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});