const express = require('express');
const { errorHandler } = require('./middleware');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(errorHandler.errorHandler);

module.exports = app;
