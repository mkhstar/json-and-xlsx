const fs = require('fs');
const util = require('util');

module.exports = {
    readFile: util.promisify(fs.readFile),
    writeFile: util.promisify(fs.writeFile),
    exists: fileExists
}

function fileExists(fileName) {
    return new Promise((res, rej) => {
        fs.access(fileName, err => {
            if (err) res(false);
            else res(true);
        })
    })
}