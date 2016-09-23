/**
 * Created by leo on 23/09/2016.
 */

var express = require('express');

var app= module.exports = express();

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));

app.get('/', function (req, res) {
    res.send('Hello from root route.');
});

app.listen(3000);
