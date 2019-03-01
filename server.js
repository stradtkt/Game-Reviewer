const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();
require('./server/config/database');

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());



app.listen(port, () => {console.log(`Listening on port ${port}`);});
