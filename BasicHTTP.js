const http = require('http');

const server= http.createServer((req,res) => {
    // console.log(req);
    if(req.url == "/"){
        res.end('Hello World!');
    }
    if(req.url == "/about"){
        res.end('About');
    }
    res.end(`
        <h1>That page doesn't exist</h1>  
        <p>LoL</p>
        <a href='/'>Main Page</a>
    `);
});

server.listen(8000);