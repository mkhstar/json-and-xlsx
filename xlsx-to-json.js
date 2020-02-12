const {writeFile} = require('./helpers/promisified-funcs');

const dot = require('dot-object');
const xlsx = require('xlsx');

async function readToFile(xlsxData, filePath = 'output.json') {
   const jsonData = renderJson(xlsxData);

    await writeFile(filePath, JSON.stringify(jsonData, null, 2));
    return true;
}

/**
 * 
 * @param {workbook} xlsxData The workbook to get in js
 */

function readAndGet(xlsxData) {
    const jsonData = renderJson(xlsxData);
    return jsonData;
}
/**
 * 
 * @param {string} sourceFilePath The workbook to get in js
 */


function readFromFileAndGet(sourceFilePath) {
    const xlsxData = xlsx.readFile(sourceFilePath);
    const jsonData = renderJson(xlsxData);

    return jsonData;
}

/**
 * 
 * @param {string} sourceFilePath The soruce file path of the workbook
 * @param {string} destFilePath The output json file path
 */

async function readFromFileToFile(sourceFilePath, destFilePath = 'output.json') {
    const xlsxData = xlsx.readFile(sourceFilePath);
    const jsonData = renderJson(xlsxData);

    await writeFile(destFilePath, JSON.stringify(jsonData, null, 2));
    return true;
}

/**
 * 
 * @param {workbook} xlsxData The workbook to get in js
 */
function renderJson(xlsxData) {
    if (!(xlsxData && xlsxData.Sheets && xlsxData.Sheets.Sheet1)) return console.error('Please pass a valid workbook');

    let jsonData = xlsx.utils.sheet_to_json(xlsxData.Sheets.Sheet1);

    jsonData.map(jd => dot.object(jd));
    return jsonData;
}


module.exports = {
    readToFile,
    readAndGet,
    readFromFileAndGet,
    readFromFileToFile
}