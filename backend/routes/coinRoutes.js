<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0ee3b433 (Initial commit)
const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController');
const logger = require('../utils/logger');

<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController');
const logger = require('../utils/logger'); 

>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
router.get('/coinInserted', (req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  coinController.streamCoinInserted(req, res, next);
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
router.post('/processCoin', (req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  coinController.processCoin(req, res, next);
});

module.exports = router;
