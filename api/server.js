'use strict';
require('dotenv').config('.env')
const express = require('express');
const testConnection = require('./routes/testConnection')
const app = express();
app.use(express.json())

const PORT = process.env.API_PORT;
const HOST = process.env.API_HOST;

// App
app.use('/test', testConnection);

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
