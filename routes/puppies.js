'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('I work');
});


module.exports = router;
