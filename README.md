# xlsxToJson

## readAndGet(xlsxData)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| xlsxData | workbook| The workbook to get in js |

## readFromFileAndGet(sourceFilePath)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sourceFilePath | string | The workbook to get in js |

## readFromFileToFile(sourceFilePath, destFilePath)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sourceFilePath | string |  | The soruce file path of the workbook |
| destFilePath | string | output.json | The output json file path |


## renderJson(xlsxData)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| xlsxData | workbook | The workbook to get in js |

# jsonToXlsx

## readToFile(jsonData, filePath)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| jsonData | string \| Object \| Array |  | The JSON Data to read from |
| filePath | string | &quot;output.xlsx&quot; | The xlsx file to write results to |



## readAndGet(jsonData)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| jsonData | string \| Object \| Array | The JSON Data to read from |



## readFromFileAndGet(sourceFilePath)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sourceFilePath | string | The JSON file to read from |



## readFromFileToFile(sourceFilePath, destFilePath)
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sourceFilePath | string |  | The JSON file to read from |
| destFilePath | string | &quot;output.xlsx&quot; | The xlsx file to write results to |