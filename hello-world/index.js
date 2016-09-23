/**
 * Created by leo on 23/09/2016.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);
