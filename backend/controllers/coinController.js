const Gpio = require('onoff').Gpio;
const logger = require('../utils/logger');
const { v4: uuidv4 } = require('uuid');
const coinPin = new Gpio(3, 'in', 'both');

const streamCoinInserted = (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  coinPin.watch((err, value) => {
    if (err) {
      logger.error('Error reading coin slot:', err);
      return;
    }
    if (value === 1) {
      logger.info({ message: 'Coin inserted' });
      sendEvent({ coinInserted: true });
    }
  });

  req.on('close', () => {
    logger.info('Client disconnected');
  });
};

const processCoin = (req, res, activeSessions) => {
  const { coinAmount } = req.body;
  const sessionId = uuidv4();
  activeSessions[sessionId] = {
    startTime: Date.now(),
    duration: 60 * 60 * 1000,
    coinAmount,
  };
  logger.info({ message: 'Coin processed', sessionId, coinAmount });
  res.json({
    message: 'Coin inserted. You have 1 hour of internet access.',
    sessionId,
  });
};

module.exports = {
  streamCoinInserted,
  processCoin,
<<<<<<< HEAD
};
=======
};
>>>>>>> cb5d6b8d (Initial commit)
