/**
 * for create server need to import http
 * we can create multiple server in a same file
 * we can pass or send response as html using setHeader type "text/html"
 * we need to neccessary end()  to the response otherwise it going pending and failed after timeout
 * res - send the response to the client
 * req - get the values from the client
 */

const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
        <title>NodeJs</title>
        </head>
        <body>
        <h2>Hello this is body part to show the value<h2> 
        <h2> ` +
        new Date() +
        `</h2>
        </body>
        </html>`
    );
    res.end();
    // process.exit(); // stop the process completly/
  })
  .listen(3001);
