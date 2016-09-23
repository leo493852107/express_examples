/**
 * Created by leo on 23/09/2016.
 */


var escapeHtml = require('escape-html');
var express = require('express');
var fs = require('fs');
var marked = require('marked');

var app = module.exports = express();

// register .md as an engine in express view system
app.engine('md', function (path, options, fn) {
    fs.readFile(path, 'utf8', function (err, str) {
        if (err) return fn(err);
        var html = marked.parse(str).replace(/\{([^}]+)\}/g, function (_, name) {
            return escapeHtml(options[name] || '');
        });
        fn(null, html);
    });
});

app.set('views', __dirname + '/views');

// make it the default so we dont need .md
app.set('view engine', 'md');

app.get('/', function (req, res) {
    res.render('index', { title: 'Markdown Example' });
});

app.get('/fail', function (req, res) {
    res.render('missing', {title: 'Markdown Example' });
});

app.listen(3000);
