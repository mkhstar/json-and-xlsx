const { writeFile } = require('./helpers/promisified-funcs');

const Dot = require('dot-object');
const xlsx = require('xlsx');

async function readToFile(xlsxData, filePath = 'output.json') {
  const jsonData = renderJson(xlsxData);

  await writeFile(filePath, JSON.stringify(jsonData, null, 2));
  return true;
}

/**
 *
 * @param {workbook} xlsxData The workbook to get in js object
 */

function readAndGet(xlsxData, defaultDot = '.') {
  const jsonData = renderJson(xlsxData, defaultDot);
  return jsonData;
}

/**
 *
 * @param {Buffer} buffer The buffer to get in js object
 */

function readFromBufferAndGet(buffer, defaultDot = '.') {
  const workbook = xlsx.read(buffer);
  const jsonData = renderJson(workbook, defaultDot);
  return jsonData;
}

/**
 *
 * @param {string} sourceFilePath The workbook to get in js
 */

function readFromFileAndGet(sourceFilePath, defaultDot = '.') {
  const xlsxData = xlsx.readFile(sourceFilePath);
  const jsonData = renderJson(xlsxData, defaultDot);

  return jsonData;
}

/**
 *
 * @param {string} sourceFilePath The soruce file path of the workbook
 * @param {string} destFilePath The output json file path
 */

async function readFromFileToFile(
  sourceFilePath,
  destFilePath = 'output.json',
  defaultDot = '.'
) {
  const xlsxData = xlsx.readFile(sourceFilePath);
  const jsonData = renderJson(xlsxData, defaultDot);

  await writeFile(destFilePath, JSON.stringify(jsonData, null, 2));
  return true;
}

/**
 *
 * @param {workbook} xlsxData The workbook to get in js
 */
function renderJson(xlsxData, defaultDot = '.') {
  if (!(xlsxData && xlsxData.Sheets))
    return console.error('Please pass a valid workbook');

  const sheetName = xlsxData.SheetNames[0];
  let jsonData = xlsx.utils.sheet_to_json(xlsxData.Sheets[sheetName]);

  const dot = new Dot(defaultDot);
  jsonData.map(jd => dot.object(jd));
  return jsonData;
}

module.exports = {
  readToFile,
  readAndGet,
  readFromBufferAndGet,
  readFromFileAndGet,
  readFromFileToFile
};
