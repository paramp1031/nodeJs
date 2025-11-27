const http = require("http");

userData = [
  {
    name: "Paramhans",
    age: 28,
    phone: 8562658965,
    address: "hindustan india private ;imite ",
  },
  {
    name: "Rajendra kumar",
    age: 20,
    phone: 8562658965,
    address: "varanasi india ",
  },
  {
    name: "rohan",
    age: 19,
    phone: 856321545,
    address: "plon no 13 lokhanwala 562",
  },
  {
    name: "akhil",
    age: 26,
    phone: 85626588565,
    address: "xyz 232562",
  },
];
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
  })
  .listen(3002);
