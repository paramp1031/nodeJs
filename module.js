//core Module -
/*
const fs = require("fs");
const os = require("os");
fs.writeFileSync("test.txt", "trying with Module ");
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
*/

//globle objects no need to import
console.log("abc");
console.log(process.cwd());
console.log(process.pid);

const { log } = require("console");

log("this is custum module ");
