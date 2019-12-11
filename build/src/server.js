'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

app.get('/', function (req, res) {
    return res.status(200).send({ 'message': 'Welcome!' });
});

// Setup Server Port
var port = process.env.PORT || 3000;

app.listen(port, function () {
    return console.log('Listening to ' + port);
});

exports.default = app;