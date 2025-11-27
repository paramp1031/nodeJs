const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    res.setHeader("Content-Type", "text/html");
    if (req.url == "/") {
      res.write("<h2>Home Page </h2>");
    } else if (req.url == "/login") {
      res.write("<h2>Login Page </h2>");
    } else {
      res.write("<h2>Other Pages  </h2>");
    }
    res.end();
  })
  .listen(3001);
