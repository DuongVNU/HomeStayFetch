const express = require('express');
const app = express();
const router = express.Router();
const User = require('./private/user');

/* GET home page. */

app.use('/', User.registerRoute(router));


module.exports = router;
