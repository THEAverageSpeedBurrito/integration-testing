'use strict';

const express = require('express');
const app = express();

const puppies = require('./routes/puppies');
app.use('/puppies', puppies);

app.listen(5000, () => {
  console.log('listening on port 5000');
});
