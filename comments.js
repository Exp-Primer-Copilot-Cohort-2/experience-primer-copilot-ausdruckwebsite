// create web server
// create a server
const express = require('express');
const app = express();

// create a router
const router = express.Router();

// create a route
router.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// mount the router
app.use('/app', router);

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});