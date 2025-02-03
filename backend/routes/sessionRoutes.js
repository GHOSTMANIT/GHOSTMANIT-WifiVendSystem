<<<<<<< HEAD
// backend/routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const logger = require('../utils/logger'); // Import the logger

// Route to check session status
=======
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const logger = require('../utils/logger');

>>>>>>> cb5d6b8d (Initial commit)
router.get('/session/:id', (req, res, next) => {
  logger.info({ method: req.method, url: req.url, sessionId: req.params.id });
  sessionController.checkSessionStatus(req, res, next);
});

<<<<<<< HEAD
// Route to disconnect session
=======
>>>>>>> cb5d6b8d (Initial commit)
router.post('/disconnect/:id', (req, res, next) => {
  logger.info({ method: req.method, url: req.url, sessionId: req.params.id });
  sessionController.disconnectSession(req, res, next);
});

module.exports = router;
