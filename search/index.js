/**
 * Created by leo on 24/09/2016.
 */

var express = require('express');
var redis = require('redis');

var db = redis.createClient();

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname);

// populate search

db.sadd('ferret', 'tobi');
db.sadd('ferret', 'loki');
db.sadd('ferret', 'jane');
db.sadd('cat', 'manny');
db.sadd('cat', 'luna');

/**
 * GET the search page.
 */
app.get('/', function (req, res) {
    res.render('search');
});


/**
 * GET search for :query.
 */
app.get('/search/:query?', function (req, res) {
    var query = req.params.query;
    db.smembers(query, function (err, vals) {
        if (err) return res.send(500);
        res.send(vals);
    });
});

/**
 * GET client javascript. Here we use sendFile()
 * because serving __dirname with the static() middleware
 * would also mean serving our server "index.js" and the "search.jade"
 * template.
 */
app.get('/client.js', function (req, res) {
    res.sendFile(__dirname + '/client.js');
});

app.listen(3000);

