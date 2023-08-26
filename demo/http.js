var express = require('express')
var serveStatic = require('serve-static')

var staticBasePath = './demo';
 
var app = express()
 
app.use(serveStatic(staticBasePath))
app.listen(8000)
console.log('http://localhost/8000');