const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const logger = require('../utils/logger');

router.get('/session/:id', (req, res, next) => {
  logger.info({ method: req.method, url: req.url, sessionId: req.params.id });
  sessionController.checkSessionStatus(req, res, next);
});

router.post('/disconnect/:id', (req, res, next) => {
  logger.info({ method: req.method, url: req.url, sessionId: req.params.id });
  sessionController.disconnectSession(req, res, next);
});

module.exports = router;
