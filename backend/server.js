const express = require('express');
const path = require('path');
const logger = require('./utils/logger'); 
const app = express();
const coinRoutes = require('./routes/coinRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  next();
});

app.get('/piso/piso.html', (req, res) => {
  logger.info({ headers: req.headers }); 
  logger.info({ message: 'Request received for piso.html' }); 
  res.sendFile(path.join(__dirname, '../frontend/piso/piso.html'), (err) => {
    if (err) {
      logger.error({ message: 'Error serving piso.html', error: err });
      res.status(err.status).end();
    }
  });
});

app.use('/', coinRoutes);
app.use('/', sessionRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info({ message: 'Server started successfully' });
});
