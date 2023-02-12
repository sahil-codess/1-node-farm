const fs = require('fs');
const http = require('http');
const url = require('url')

///////////////////////////////////////////////////////////
// File Reading and Writing

///// Blocking or synchrounous way
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textInput)
// const textOutput = `This is what we know about Avocados: ${textInput} .\n Created on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log('File has been written!')


//// Non-blocking or asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8' ,(err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8' ,(err, data2) => {
//         console.log(data2)
//         fs.readFile('./txt/append.txt', 'utf-8' ,(err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your files has been written! 😁')
//             })
//         })
//     })
// })

// console.log('Will read this!')


///////////////////////////////////////////////////////////////////////////////////
///// Server

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello from ur own web server');
});

server.listen('8000', '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});



