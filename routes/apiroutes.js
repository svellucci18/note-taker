// require express-js library for creating routes and includes the methods such as get, post etc
const express = require('express');

// defining express as app to simplify the code.
const app = express();

// Add a new request route for creating a new note MATCH THE REQUEST METHOD to configure the matching route
app.get('/api/notes', (req,res) => { //the string is from the end of the url

    // send the json data, once this is finished we should see the test note from the db
    res.json( /* send note data */);
    
});

// Post to persist data aka save to db.json
app.post('/api/notes', (req,res) => { //the string is from the end of the url

    // create persisting data

    // Access the new note data from `req`

    // Push that new note to my existing list of notes

    // Write my updated notes list to the `db.json` file
    
});


module.exports = app;