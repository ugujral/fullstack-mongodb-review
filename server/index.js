const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./routes.js');

const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

// add middleware

app.listen(port, () => console.log(`Listening on port ${port}`));
