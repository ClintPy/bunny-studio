'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
_dotenv2.default.config();

var app = (0, _express2.default)();

var DB_NAME = process.env.DB_NAME || 'root'; // In production I'll omit the hard-coded name
var DB_PWD = process.env.DB_PWD || 'eastood';

var DEV_CONNECTION_URI = 'mongodb+srv://' + DB_NAME + ':' + DB_PWD + '@cluster0-nsnkg.mongodb.net/dev?retryWrites=true&w=majority';

// Connect to Mongodb
_mongoose2.default.connect(DEV_CONNECTION_URI, { useUnifiedTopology: true, useNewUrlParser: true });
var db = _mongoose2.default.connection;

if (!db) console.log("Error Connecting to DB!");else console.log("DB Connected Successfully!");

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