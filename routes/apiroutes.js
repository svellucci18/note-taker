// require express-js library for creating routes and includes the methods such as get, post etc
const express = require('express');
const { redirect } = require('express/lib/response');

// require crud.js
const crud = require('../db/crud');

// defining express as app to simplify the code.
const router = express();

// declaring the db so it knows where to save
const currentNotes = require('../db/db.json');

// Add a new request route for creating a new note MATCH THE REQUEST METHOD to configure the matching route
router.get('/notes', (req,res) => { //the string is from the end of the url

    // send the json data, once this is finished we should see the test note from the db
    res.json(currentNotes);
    
});

// Post to persist data aka save to db.json
router.post('/notes', (req,res) => { //the string is from the end of the url

    // Access the note data that was sent
    const newNote = req.body;

    // create persisting data

    // Access the new note data from `req`

    // Push that new note to my existing list of notes

    // Write my updated notes list to the `db.json` file
    res.json('something in response'); // way to look into response in inspector -- not working
    
});


module.exports = router;