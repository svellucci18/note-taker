// import routes
const apiRoutes = require('./routes/apiroutes')
const htmlRoutes = require('./routes/htmlroutes')

// require express-js library for creating routes and includes the methods such as get, post etc
const express = require('express');

// defining express as app to simplify the code.
const app = express();

// Set up the port as default 
const PORT = process.env.POT || 3001; // will update for deployed app for heroku

// Location of static front-end files are in the public folder
app.use(express.static('public'));

// Methods to allow us to get information and parse it for easy manipulation
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enables the route path to look in the api and html routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

// Start listening on Port number we assign it to
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

