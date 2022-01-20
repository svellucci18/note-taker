const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

// Define what happens when /notes is added to the path http://localhost:3001/notes.html worked
app.get('/note', (req,res) => {

    // send the file notes.html review activity 7
    res.sendFile();

})

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


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

