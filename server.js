// Node Modules Imports
const express = require('express');
const path = require('path');

// Internal Modules Imports
const api = require('./server/routes/api');


// Setting up express, serving client files
const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());

// Connecting to "api", i.e our routes
app.use('/', api);

// Running the server
const PORT = 5000;
app.listen(PORT, function() {
    console.log('Running on ' + PORT);
});