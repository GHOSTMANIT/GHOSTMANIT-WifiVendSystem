const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'MMM/D/YYYY h:mm:ss A' }),
    winston.format.colorize(),
    winston.format.printf(({ timestamp, level, message }) => {
      const formattedMessage =
        typeof message === 'object' ? JSON.stringify(message) : message;
      return `[${level.toLowerCase()}] ${timestamp} : ${formattedMessage}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/server.log' }),
  ],
});

module.exports = logger;
