// require express-js library for creating routes and includes the methods such as get, post etc
const express = require('express');

// Defining express as app to simplify the code.
const app = express();
const path = require('path');

// Define what happens when /notes is added to the path http://localhost:3001/notes.html worked
app.get('/notes', (req,res) => {

    // send the file to notes.html without needing to type in notes.html in the url
    res.sendFile(path.join(__dirname, '../public/notes.html'));

})

// catch all for if a strange route is attempted to be accessed.
app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/index.html'));
    
});


module.exports = app;