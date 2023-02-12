const fs = require('fs');

const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInput)

const textOutput = `This is what we know about Avocados: ${textInput} .\n Created on ${Date.now()}`

fs.writeFileSync('./txt/output.txt', textOutput);

console.log('File has been written!')