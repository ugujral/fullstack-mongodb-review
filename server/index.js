const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./router.js');

const app = express();

const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}`));
