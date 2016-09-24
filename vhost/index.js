/**
 * Created by leo on 24/09/2016.
 */

var express = require('express');
var logger = require('morgan');
var vhost = require('vhost');

/*
 edit /etc/hosts:

 127.0.0.1       foo.example.com
 127.0.0.1       bar.example.com
 127.0.0.1       example.com
 */

// Main server app

var main = express();

if (!module.parent) main.use(logger('dev'));

main.get('/', function (req, res) {
    res.send('Hello from main app!');
});

main.get('/:sub', function (req, res) {
    res.send('requested ' + req. params.sub);
});

// Redirect app

var redirect = express();

redirect.use(function (req, res) {
    if (!module.parent) console.log(req.vhost);
    res.redirect('http://example.com:3000/' + req.vhost[0]);
});

// Vhost app
var app = module.exports = express();

app.use(vhost('*.example.com', redirect)); // Serves all subdomains via Redirect app
app.use(vhost('example.com', main)); // Serves app leveldomain via Main server app


app.listen(3000);