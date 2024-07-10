// create a web server
// create a web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var comments = require('./comments.json');
var _ = require('underscore');
var request = require('request');
var cheerio = require('cheerio');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(comments));
  });
});

app.delete('/comments', function(req, res) {
  comments = [];
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(comments));
  });
});

app.get('/scrape', function