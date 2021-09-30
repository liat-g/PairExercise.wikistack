// const { application } = require('express');
var express = require('express');
var wikirouter = express.Router();
var addPage = require('../views/addPage.js');

wikirouter.get('/', (req, res) => {res.send('hi')});
wikirouter.post('/', (req, res) => {res.send(res.json(req.body))});
wikirouter.get('/add', (req, res) => {res.send(addPage())});

module.exports = wikirouter 