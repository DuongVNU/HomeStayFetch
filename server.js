const express = require('express');
const bodyParser = require('body-parser');
const rootApi = require('./controllers');


// Starting point of the server
let app = express(); // Export app for other routes to use
const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json());
// Routes & Handlers
app.use('/', rootApi);

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

