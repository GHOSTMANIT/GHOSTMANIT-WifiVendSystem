const express = require('express');
const router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD
const Gpio = require('onoff').Gpio; // For GPIO pin handling
const { v4: uuidv4 } = require('uuid'); // For generating unique session IDs

// GPIO setup for coin slot (pin 3)
const coinPin = new Gpio(3, 'in', 'both');

// Store active sessions
const activeSessions = {};

// Route to stream coin insertion events
=======
const Gpio = require('onoff').Gpio;
const { v4: uuidv4 } = require('uuid'); 
=======
const Gpio = require('onoff').Gpio;
const { v4: uuidv4 } = require('uuid');
>>>>>>> 0ee3b433 (Initial commit)

const coinPin = new Gpio(3, 'in', 'both');

const activeSessions = {};

<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
router.get('/coinInserted', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  coinPin.watch((err, value) => {
    if (err) {
<<<<<<< HEAD
<<<<<<< HEAD
      // Consider using a logging library instead of console.log
      // console.error('Error reading coin slot:', err);
      return;
    }
    if (value === 1) {
      // Coin inserted
=======
      return;
    }
    if (value === 1) {
>>>>>>> cb5d6b8d (Initial commit)
=======
      return;
    }
    if (value === 1) {
>>>>>>> 0ee3b433 (Initial commit)
      sendEvent({ coinInserted: true });
    }
  });

<<<<<<< HEAD
  req.on('close', () => {
<<<<<<< HEAD
    // Consider using a logging library instead of console.log
    // console.log('Client disconnected');
  });
});

// Route to process coin insertion
=======
  });
});

>>>>>>> cb5d6b8d (Initial commit)
=======
  req.on('close', () => {});
});

>>>>>>> 0ee3b433 (Initial commit)
router.post('/processCoin', (req, res) => {
  const { coinAmount } = req.body;
  const sessionId = uuidv4();
  activeSessions[sessionId] = {
    startTime: Date.now(),
<<<<<<< HEAD
<<<<<<< HEAD
    duration: 60 * 60 * 1000, // 1 hour in milliseconds
=======
    duration: 60 * 60 * 1000,
>>>>>>> cb5d6b8d (Initial commit)
=======
    duration: 60 * 60 * 1000,
>>>>>>> 0ee3b433 (Initial commit)
    coinAmount,
  };
  res.json({
    message: 'Coin inserted. You have 1 hour of internet access.',
    sessionId,
  });
});

<<<<<<< HEAD
<<<<<<< HEAD
// Route to check session status
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
router.get('/session/:id', (req, res) => {
  const sessionId = req.params.id;
  const session = activeSessions[sessionId];
  if (!session) {
    return res.status(404).json({ message: 'Session not found' });
  }
  const remainingTime = session.duration - (Date.now() - session.startTime);
  res.json({ remainingTime, coinAmount: session.coinAmount });
});

<<<<<<< HEAD
<<<<<<< HEAD
// Route to disconnect session
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
router.post('/disconnect/:id', (req, res) => {
  const sessionId = req.params.id;
  if (!activeSessions[sessionId]) {
    return res.status(404).json({ message: 'Session not found' });
  }
  delete activeSessions[sessionId];
  res.json({ message: 'Session disconnected' });
});

module.exports = router;
