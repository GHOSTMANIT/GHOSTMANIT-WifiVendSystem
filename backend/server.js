<<<<<<< HEAD
<<<<<<< HEAD
// backend/server.js
const express = require('express');
const path = require('path');
const logger = require('./utils/logger'); 
=======
const express = require('express');
const path = require('path');
const logger = require('./utils/logger'); 
>>>>>>> cb5d6b8d (Initial commit)
=======
const express = require('express');
const path = require('path');
const logger = require('./utils/logger');
>>>>>>> 0ee3b433 (Initial commit)
const app = express();
const coinRoutes = require('./routes/coinRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

<<<<<<< HEAD
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

=======
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

>>>>>>> cb5d6b8d (Initial commit)
=======
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

>>>>>>> 0ee3b433 (Initial commit)
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  next();
});

<<<<<<< HEAD
<<<<<<< HEAD
app.get('/piso/piso.html', (req, res) => {
  logger.info({ headers: req.headers }); 
  logger.info({ message: 'Request received for piso.html' }); 
=======
app.get('/piso/piso.html', (req, res) => {
  logger.info({ headers: req.headers }); 
  logger.info({ message: 'Request received for piso.html' }); 
>>>>>>> cb5d6b8d (Initial commit)
=======
app.get('/piso/piso.html', (req, res) => {
  logger.info({ headers: req.headers });
  logger.info({ message: 'Request received for piso.html' });
>>>>>>> 0ee3b433 (Initial commit)
  res.sendFile(path.join(__dirname, '../frontend/piso/piso.html'), (err) => {
    if (err) {
      logger.error({ message: 'Error serving piso.html', error: err });
      res.status(err.status).end();
    }
  });
});

<<<<<<< HEAD
<<<<<<< HEAD
app.use('/', coinRoutes);
app.use('/', sessionRoutes);

=======
app.use('/', coinRoutes);
app.use('/', sessionRoutes);

>>>>>>> cb5d6b8d (Initial commit)
=======
app.use('/', coinRoutes);
app.use('/', sessionRoutes);

>>>>>>> 0ee3b433 (Initial commit)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

<<<<<<< HEAD
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info({ message: 'Server started successfully' }); // Log server start
=======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info({ message: 'Server started successfully' });
>>>>>>> cb5d6b8d (Initial commit)
=======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info({ message: 'Server started successfully' });
>>>>>>> 0ee3b433 (Initial commit)
});
