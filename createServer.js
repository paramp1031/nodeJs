// craete Server
// what is the work of req and response     req - getting value from frontend res - send the response from the server
// can we create multiple server in same file - yes
//core package use to create server - http

const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>Hello i am server<h1>");
    res.end("end of response"); //this is nessessary to complete the response or end
  })
  .listen(3300);
