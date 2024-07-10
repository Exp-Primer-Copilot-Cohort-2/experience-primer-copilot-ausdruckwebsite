// create a web server
const express = require('express');
const app = express();
const port = 3000;

// import the comments data
const comments = require('./data/comments');

// import the posts data
const posts = require('./data/posts');

// import the users data
const users = require('./data/users');

// import the likes data
const likes = require('./data/likes');

// import the cors package
const cors = require('cors');

// use the cors package
app.use(cors());