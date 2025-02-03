<<<<<<< HEAD
// backend/routes/coinRoutes.js
const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController');
const logger = require('../utils/logger'); // Import the logger

// Route to stream coin insertion events
=======
const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController');
const logger = require('../utils/logger'); 

>>>>>>> cb5d6b8d (Initial commit)
router.get('/coinInserted', (req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  coinController.streamCoinInserted(req, res, next);
});

<<<<<<< HEAD
// Route to process coin insertion
=======
>>>>>>> cb5d6b8d (Initial commit)
router.post('/processCoin', (req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  coinController.processCoin(req, res, next);
});

module.exports = router;
