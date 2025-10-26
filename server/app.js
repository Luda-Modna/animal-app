const express = require('express');
const { errorHandler } = require('./middleware');

const app = express();

app.use(express.json())

app.use('/api', router)

app.use(errorHandler.errorHandler)

module.exports = app;
