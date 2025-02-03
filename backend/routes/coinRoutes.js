// backend/routes/coinRoutes.js
const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController');
const logger = require('../utils/logger'); // Import the logger

// Route to stream coin insertion events
router.get('/coinInserted', (req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  coinController.streamCoinInserted(req, res, next);
});

// Route to process coin insertion
router.post('/processCoin', (req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  coinController.processCoin(req, res, next);
});

module.exports = router;
