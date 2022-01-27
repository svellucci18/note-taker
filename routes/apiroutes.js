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
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);

    // create persisting data
    // Access the new note data from `req`
    // Push that new note to my existing list of notes


    // If all the required properties are present
    if ( title && text ) {
    // Variable for the object we will save
        const newNote = {
        title,
        text,
        id: uuid(),
        };

        // Convert the data to a string so we can save it
        const noteString = JSON.stringify(currentNotes, null, 2);

        // appending the new note to the existing file
        currentNotes.push(newNote);

        // Read the string to a file
        fs.readFile(`../db/db.json`, 'utf-8', (err, data) =>
        err
            ? console.error(err)
            : console.log(
                `note for ${newNote.title} has been written to JSON file`
            )
        );

        // Write the string to a file
        fs.writeFile(`../db/db.json`, noteString, (err) =>
        err
            ? console.error(err)
            : console.log(
                `note for ${newNote.title} has been written to JSON file`
            )
        );

        const response = {
        status: 'success',
        body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error in posting note');
    }


    // Write my updated notes list to the `db.json` file
    res.json('something in response'); // way to look into response in inspector -- not working
    
});


module.exports = router;