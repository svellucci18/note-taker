// Defining express as app to simplify the code.
const app = express();


// Define what happens when /notes is added to the path http://localhost:3001/notes.html worked
app.get('/notes', (req,res) => {

    // send the file notes.html review activity 7
    res.sendFile();

})


module.exports = app;