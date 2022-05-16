const http = require("http");

console.log("hola mundo");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("Mi primer Script en The Bridge!");
  })
  .listen(8080);
