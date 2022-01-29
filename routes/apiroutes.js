// require express-js library for creating routes and includes the methods such as get, post etc
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');
const { redirect } = require('express/lib/response');

// Enables reading and writing methods and ability to set which file you are reading/writing to.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// require crud.js
// const crud = require('../db/crud');

// defining express as app to simplify the code.
const router = express();

// declaring the db so it knows where to save
var currentNotes = require('../db/db.json');

// Add a new request route for creating a new note MATCH THE REQUEST METHOD to configure the matching route
router.get('/notes', (req,res) => { //the string is from the end of the url


    // // Send a message to the client
    // res.json(`${req.method} request received to get notes`);

    // // Log our request to the terminal
    // console.info(`${req.method} request received to get notes`);

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

    // If all the required properties are present
    if ( title && text ) {
    // Variable for the object we will save
        const newNote = {
        title,
        text,
        id: uuidv4(),
        };

        // Convert the data to a string so we can save it
        // const noteString = JSON.stringify(currentNotes, null, 2);

        // appending the new note to the existing file
        currentNotes.push(newNote);

        // Read the string to a file
        readFileAsync(`db/db.json`, 'utf-8' )
            .then((notes) => {
                console.log("help", notes)
                let parsedNotes;
                try{
                    parsedNotes = [].concat(JSON.parse(notes)); // parsing it so it becomes an array
                }
                catch(err) {
                    parsedNotes = []; // if db.json is empty set it to empty
                }

                parsedNotes.push(newNote);

                // Write the string to a file
                writeFileAsync(`db/db.json`, JSON.stringify(parsedNotes, null, 2));

                const response = {
                status: 'success',
                body: newNote,
                };

                console.log(response);
                res.status(201).json(response);
            });

    } else {
        res.status(500).json('Error in posting note');
    }

    
});

router.delete('/notes/:id', (req,res) => {
    
    readFileAsync(`db/db.json`, 'utf-8' )
            .then((notes) => {
                console.log("help", notes)
                let parsedNotes;
                try{
                    parsedNotes = [].concat(JSON.parse(notes)); // parsing it so it becomes an array
                }
                catch(err) {
                    parsedNotes = []; // if db.json is empty set it to empty
                }

                var id = req.params.id; //this is the id that we need to delete
                
                var newNotes = parsedNotes.filter((note) => note.id !== id); 

                currentNotes = newNotes;

                // Write the string to a file
                writeFileAsync(`db/db.json`, JSON.stringify(newNotes, null, 2));
            });
});


module.exports = router;