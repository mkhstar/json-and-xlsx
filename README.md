# json-and-xlsx
A package for converting JSON to XLSX and XLSX to JSON

# Global Functions
| Param | Description |
| --- | --- |
| xlsxToJson | The function for handling xlsx to json conversion |
| jsonToXlsx | The function for handling json to xlsx conversion |

# xlsxToJson
This function is used to handle xlsx to json conversions

## readAndGet(xlsxData)
Reads workbook returns a json output

| Param | Type | Description |
| --- | --- | --- |
| xlsxData | workbook| The workbook to get in js |

## Usage
#### Xlsx Data in Sheet1

| title | description |
| --- | --- |
| Title 1 | Desc 1 |
| Title 2 | Desc 2 |

```javascript
const {xlsxToJson} = require('json-and-xlsx');

const workbook = require('./workbook'); // Get Workbook

const output = xlsxToJson.readAndGet(workbook);
/*
    returns [
    {
        title: 'Title 1',
        description: 'Desc 1'
    },
    {
        title: 'Title 2',
        description: 'Desc 2'
    }
];
*/
```

## readFromBufferAndGet(buffer)
Reads from a buffer and returns a json output

| Param | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to get in js object |

## Usage
```javascript
const {xlsxToJson} = require('json-and-xlsx');
const buffer = require('./buffer-data.js');

const output = xlsxToJson.readFromBufferAndGet(workbook);
/*
    returns [
    {
        title: 'Title 1',
        description: 'Desc 1'
    },
    {
        title: 'Title 2',
        description: 'Desc 2'
    }
];
*/
```


## readFromFileAndGet(xlsxData)
Reads workbook returns a json output

| Param | Type | Description |
| --- | --- | --- |
| xlsxData | workbook| The workbook to get in js |

## Usage
#### Xlsx Data in Sheet1 stored in workbook.xlsx

| title | description |
| --- | --- |
| Title 1 | Desc 1 |
| Title 2 | Desc 2 |

```javascript
const {xlsxToJson} = require('json-and-xlsx');

const output = xlsxToJson.readFromFileAndGet('workbook.xlsx');
/*
    returns [
    {
        title: 'Title 1',
        description: 'Desc 1'
    },
    {
        title: 'Title 2',
        description: 'Desc 2'
    }
];
*/
```

# jsonToXlsx
This function is used to handle json to xlsx conversions

```json
//  json-data.json
[
    {
        "title": "Title 1",
        "description": "Desc 1"
    },
    {
        "title": "Title 2",
        "description": "Desc 2"
    }
]
```

## readAndGet(jsonData)
Reads json returns a workbook

```javascript
const {jsonToXlsx} = require('json-and-xlsx');

const jsonData = [
    {
        title: "Title 1",
        description: "Desc 1"
    },
    {
        title: "Title 2",
        description: "Desc 2"
    }
]; // Could be a JSON String

const output = jsonToXlsx.readAndGet(jsonData);
/*
    returns Workbook
*/
```


## readAndGetBuffer(jsonData)
Reads json returns a buffer of the workbook

```javascript
const {jsonToXlsx} = require('json-and-xlsx');

const jsonData = [
    {
        title: "Title 1",
        description: "Desc 1"
    },
    {
        title: "Title 2",
        description: "Desc 2"
    }
]; // Could be a JSON String

const output = jsonToXlsx.readAndGetBuffer(jsonData);
/*
    returns Buffer
*/
```


## readFromFileAndGet(sourceFilePath)
Reads json returns a workbook

```javascript
const {jsonToXlsx} = require('json-and-xlsx');

const output = jsonToXlsx.readFromFileAndGet('json-data.json');
/*
    returns Workbook
*/
```


## readFromFileAndGetBuffer(sourceFilePath)
Reads json from `sourceFile` and returns a Buffer

```javascript
const {jsonToXlsx} = require('json-and-xlsx');

const output = jsonToXlsx.readFromFileAndGetBuffer('json-data.json');
/*
    returns Buffer
*/
```


## readFromFileToFile(sourceFilePath, destFilePath)
Reads json from file and writes the workbook to a file

```javascript
const {jsonToXlsx} = require('json-and-xlsx');

jsonToXlsx.readFromFileToFile('json-data.json', 'workbook.xlsx');
/*
    writes json to workbook.xlsx
*/
```
