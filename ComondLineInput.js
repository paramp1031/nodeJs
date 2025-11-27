//getting input from command line
// like dianamic port run server on disfferent port every time or custom port
const http = require("http");
const arg = process.argv;
const port = arg[2];
console.log("all arguments of the process --------------", arg);

http
  .createServer((req, res) => {
    res.write("<h1>Run server On custom port</h1>");
    res.end();
  })
  .listen(port);
