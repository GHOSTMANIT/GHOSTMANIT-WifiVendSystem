const { v4: uuidv4 } = require('uuid');
const logger = require('../utils/logger');

const activeSessions = {};

const checkSessionStatus = (req, res) => {
  const sessionId = req.params.id;
  const session = activeSessions[sessionId];
  if (!session) {
    logger.warn({ message: 'Session not found', sessionId });
    return res.status(404).json({ message: 'Session not found' });
  }
  const remainingTime = session.duration - (Date.now() - session.startTime);
  logger.info({ message: 'Session status checked', sessionId, remainingTime });
  res.json({ remainingTime, coinAmount: session.coinAmount });
};

const disconnectSession = (req, res) => {
  const sessionId = req.params.id;
  if (!activeSessions[sessionId]) {
    logger.warn({ message: 'Session not found', sessionId });
    return res.status(404).json({ message: 'Session not found' });
  }
  delete activeSessions[sessionId];
  logger.info({ message: 'Session disconnected', sessionId });
  res.json({ message: 'Session disconnected' });
};

module.exports = {
  checkSessionStatus,
  disconnectSession,
  activeSessions,
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
};
>>>>>>> cb5d6b8d (Initial commit)
=======
};
>>>>>>> 0ee3b433 (Initial commit)
