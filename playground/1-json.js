const fs = require ('fs')
const book = {
    title: 'Ego is Enemy',
    author: 'Ryan Holiday'
}

// converting from js to JSON
const bookJSON = JSON.stringify(book) // takes js object, converts it into json string. now can't access it like this: bookJson.title
console.log (bookJSON)

//fs.writeFileSync('1-json.json', bookJSON)

// read from the json file
/*const dataBuffer = fs.readFileSync('1-json.json') // comes in as a buffer - byte code
const dataJSON = dataBuffer.toString()
const data = JSON.parse (dataJSON)
console.log(data.title)
*/

// converting from JSON to js
//const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)


// challenge code: change the properties of the data in the json file
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse (dataJSON)
      data.name = 'Adina'
      data.age = '30'
const myJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', myJSON)

