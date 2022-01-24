const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(`hello from the second route!!!`);
  next();
});

module.exports = router;
