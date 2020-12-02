/* jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/

var express = require('express');
var http = require('http');

var app = express();

app.set('port',process.env.PORT || 3000);

/* middle ware */
app.use(function(req, res, next){
    console.log('first middle ware called.');

    var useragent = req.header('User-Agent');
    var paramName = req.query.age;

    res.send('<h3>서버에서 응답. User-Agent  : ' + useragent + '</h3> <h3>Param Name -> ' + paramName + '</h3>');

});

var server = http.createServer(app).listen(app.get('port') , function (){
    console.log('express web server start : ' + app.get('port'));
});
