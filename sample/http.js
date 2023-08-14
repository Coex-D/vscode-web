var express = require("express");
var serveStatic = require("serve-static");

var staticBasePath = "./";
var app = express();

app.use(serveStatic(staticBasePath));
app.listen(8000);
console.log("https://localhost/8000");
