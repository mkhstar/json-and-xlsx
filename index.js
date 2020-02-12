const jsonToXlsx = require('./json-to-xlsx');
const xlsxToJson = require('./xlsx-to-json');

const jsDoc = require('jsdoc-to-markdown');

jsDoc.render({files: 'index.js'}).then(data => console.log(data))

module.exports = {
    jsonToXlsx,
    xlsxToJson
}