<<<<<<< HEAD
// backend/server.js
const express = require('express');
const path = require('path');
const logger = require('./utils/logger'); // Import the logger
=======
const express = require('express');
const path = require('path');
const logger = require('./utils/logger'); 
>>>>>>> cb5d6b8d (Initial commit)
const app = express();
const coinRoutes = require('./routes/coinRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

<<<<<<< HEAD
// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

// Log incoming requests
=======
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

>>>>>>> cb5d6b8d (Initial commit)
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  next();
});

<<<<<<< HEAD
// Serve piso.html directly and log any errors
app.get('/piso/piso.html', (req, res) => {
  logger.info({ headers: req.headers }); // Log the request headers
  logger.info({ message: 'Request received for piso.html' }); // Log the request
=======
app.get('/piso/piso.html', (req, res) => {
  logger.info({ headers: req.headers }); 
  logger.info({ message: 'Request received for piso.html' }); 
>>>>>>> cb5d6b8d (Initial commit)
  res.sendFile(path.join(__dirname, '../frontend/piso/piso.html'), (err) => {
    if (err) {
      logger.error({ message: 'Error serving piso.html', error: err });
      res.status(err.status).end();
    }
  });
});

<<<<<<< HEAD
// Use routes
app.use('/', coinRoutes);
app.use('/', sessionRoutes);

// Serve index.html as the main entry point
=======
app.use('/', coinRoutes);
app.use('/', sessionRoutes);

>>>>>>> cb5d6b8d (Initial commit)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

<<<<<<< HEAD
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info({ message: 'Server started successfully' }); // Log server start
=======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info({ message: 'Server started successfully' });
>>>>>>> cb5d6b8d (Initial commit)
});
