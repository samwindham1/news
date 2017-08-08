const express = require('express');
const router = express.Router();

// get connection to db
// var Article = require('../db');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://newsapi.org/v1/';
const apiKey = '6c6bcb21de2f4a5aaecedf0f98ee20ca';

const source = 'the-new-york-times';


// GET api listening
router.get('/posts', (req, res) => {
    axios.get(`${API}/articles?source=${source}&sortBy=latest&apiKey=${apiKey}`)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

module.exports = router;