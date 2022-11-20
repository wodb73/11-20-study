const fs = require('fs').promises;
const { response } = require('express');
const http = require('http');

http.createServer(async(request, response) => {
    try{
    const data = await fs.readFile('./index.html');
    response.writeHead(200, {'Content-Type':'text/html;chartset=utf-8'});
    response.end(data);
    }catch(error){
        response.writeHead(500, {'Content-Type':'text/html;chartset=utf-8'});
        response.end(error.message);
    }
}).listen(8000, () => {
    console.log('8000번 포트에서 서버 대기 중 ');
});