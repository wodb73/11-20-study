const { response } = require('express');
const http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    response.write("<h1>재유의 서버</h1>");
    response.end("<p>어서 오세요</p>");

}).listen(8000, () => {
    console.log("8000번 포트에서 대기중 ");
});

