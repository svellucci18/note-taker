// Require packages
const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // might need to include the version number

// Enables reading and writing methods and ability to set which file you are reading/writing to.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// Class for CRUD
class crud {

    read() {
        // write functionality GET
    }

    write() {
        // write functionality POST
    }

    getNotes() {
        // write functionality parse
    }

    addNotes() {
        // write functionality stringify
    }

    deleteNotes() {
        // write functionality DELETE
    }

};

module.exports = new crud();