const express = require('express');
const router = express.Router();
const Gpio = require('onoff').Gpio;
const { v4: uuidv4 } = require('uuid'); 

const coinPin = new Gpio(3, 'in', 'both');

const activeSessions = {};

router.get('/coinInserted', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  coinPin.watch((err, value) => {
    if (err) {
      return;
    }
    if (value === 1) {
      sendEvent({ coinInserted: true });
    }
  });

  req.on('close', () => {
  });
});

router.post('/processCoin', (req, res) => {
  const { coinAmount } = req.body;
  const sessionId = uuidv4();
  activeSessions[sessionId] = {
    startTime: Date.now(),
    duration: 60 * 60 * 1000,
    coinAmount,
  };
  res.json({
    message: 'Coin inserted. You have 1 hour of internet access.',
    sessionId,
  });
});

router.get('/session/:id', (req, res) => {
  const sessionId = req.params.id;
  const session = activeSessions[sessionId];
  if (!session) {
    return res.status(404).json({ message: 'Session not found' });
  }
  const remainingTime = session.duration - (Date.now() - session.startTime);
  res.json({ remainingTime, coinAmount: session.coinAmount });
});

router.post('/disconnect/:id', (req, res) => {
  const sessionId = req.params.id;
  if (!activeSessions[sessionId]) {
    return res.status(404).json({ message: 'Session not found' });
  }
  delete activeSessions[sessionId];
  res.json({ message: 'Session disconnected' });
});

module.exports = router;
