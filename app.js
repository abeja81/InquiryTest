const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/styles', express.static(__dirname + '/css/'));
app.use('/images', express.static(__dirname + '/img/'));
app.use('/js', express.static(__dirname + '/js/'));

app.use('/', routes);

module.exports = app;