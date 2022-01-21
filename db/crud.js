// Require packages
const util = require('util');
const fs = require('fs');
const uuid = require('uuid'); // might need to include the version number

// Enables reading and writing methods and ability to set which file you are reading/writing to.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// Class for CRUD
class crud {

    read() {
        // write functionality
    }

    write() {
        // write functionality
    }

    getNotes() {
        // write functionality
    }

    addNotes() {
        // write functionality
    }

    deleteNotes() {
        // write functionality
    }

};

module.exports = new crud();