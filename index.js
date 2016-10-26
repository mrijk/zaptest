'use strict';

const _ = require('lodash');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 5000);

app.get('/api/v1/version', (req, res) => {
    res.send({version: '1.0'});
});

function init() {
    app.listen(app.get('port'), () => {
        console.log('Node app is running on port', app.get('port'));
    });
}

init();
