const http = require('http');
const fs = require('fs');
const url = require('url');



const server = http.createServer((req, res) => {
    res.end("<h1>Hello World</h1>");
})

server.listen(3001);