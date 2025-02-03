const Gpio = require('onoff').Gpio;
const winston = require('winston');

const coinPin = new Gpio(3, 'in', 'both');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

coinPin.watch((err, value) => {
  if (err) return;
  if (value === 1) logger.info('Coin inserted!');
});

process.on('SIGINT', () => coinPin.unexport());
