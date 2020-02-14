const path = require('path');

const getDotObject = require('./helpers/get-dot-object');
const xlsx = require('xlsx');
const bufferFrom = require('buffer-from');

/**
 *
 * @param {string|Object|Array} jsonData The JSON Data to read from
 * @param {string} filePath The xlsx file to write results to
 */

function readToFile(jsonData, filePath = 'output.xlsx') {
  const workbook = renderWorkbook(jsonData);

  xlsx.writeFile(workbook, filePath);
}


/**
 * 
 * @param {string|Object|Array} jsonData The JSON Data to read from
 */
function readAndGet(jsonData) {
    const workbook = renderWorkbook(jsonData);
    return workbook;
}


/**
 * 
 * @param {string|Object|Array} jsonData The JSON Data to read from
 */
function readAndGetBuffer(jsonData) {
    const workbook = renderWorkbook(jsonData);
    const defaults = {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    };
    const excelData = xlsx.write(workbook, Object.assign({}, defaults, {}));
    return excelData instanceof Buffer ? excelData : bufferFrom(excelData, 'binary');
}

/**
 *
 * @param {string} sourceFilePath The JSON file to read from
 */

function readFromFileAndGet(sourceFilePath) {
    const jsonData = require(sourceFilePath);
    
    const workbook = renderWorkbook(jsonData);
    return workbook;
}


/**
 *
 * @param {string} sourceFilePath The JSON file to read from
 */

function readFromFileAndGetBuffer(sourceFilePath) {
    const jsonData = require(sourceFilePath);
    
    const workbook = renderWorkbook(jsonData);
    const defaults = {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    };
    const excelData = xlsx.write(workbook, defaults);
    return excelData instanceof Buffer ? excelData : bufferFrom(excelData, 'binary');
}


/**
 *
 * @param {string} sourceFilePath The JSON file to read from
 * @param {string} destFilePath The xlsx file to write results to
 */

function readFromFileToFile(sourceFilePath, destFilePath = 'output.xlsx') {
    const jsonData = require(sourceFilePath);
    
    const workbook = renderWorkbook(jsonData);
    xlsx.writeFile(workbook, destFilePath)
}




function renderWorkbook(data) {
    if (typeof data === 'string') data = JSON.parse(data);
    if (typeof data === 'object' && !Array.isArray(data)) data = [data];
  
    data = data.map((d, i) => {
      if (typeof d !== 'object')
        return console.error(`index ${i} contains invalid object`);
      return getDotObject(d);
    });
  
    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
  
    workbook.SheetNames.push('Sheet1');
    workbook.Sheets['Sheet1'] = worksheet;

    return workbook;
}


module.exports = {
    readToFile,
    readAndGet,
    readAndGetBuffer,
    readFromFileAndGet,
    readFromFileAndGetBuffer,
    readFromFileToFile
}