const express = require('express');
const app = express();
const db = require('./src/schema/db');

const port = process.env.PORT || 3001;

const UserController = require('./src/controller/UserController');

app.use('/user', UserController);

const server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

