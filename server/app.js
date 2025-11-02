const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware');
const router = require('./routes');

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

app.use('/api', router);

app.use(errorHandler.errorHandler);

module.exports = app;
