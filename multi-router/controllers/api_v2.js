/**
 * Created by leo on 23/09/2016.
 */

var express = require('express');

var apiv2 = express.Router();

apiv2.get('/', function (req, res) {
    res.send('Hello from APIv2 route.');
});

apiv2.get('/users', function (req, res) {
    res.send('List of APIv2 users.');
});

module.exports = apiv2;
