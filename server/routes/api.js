const express = require('express');
const router = express.Router();

// get connection to db
// var Article = require('../db');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://newsapi.org/v1';
const apiKey = '6c6bcb21de2f4a5aaecedf0f98ee20ca';

const source = 'the-new-york-times';

// GET api listening
router.get('/articles', (req, res) => {
    console.log('Requesting articles from newsapi.org ...');
    const url = `${API}/articles?source=${source}&sortBy=Popular&apiKey=${apiKey}`;

    axios.get(url)
    .then(response => {
        console.log('Request successful.');
        res.status(200).json(response.data.articles);
    })
    .catch(err => {
        if(err instanceof axios.HttpError) {
            res.status(500).send(err);
        } else if(err instanceof Error) {
            console.error("From api.js: " + err.message);
        }
    });

})

module.exports = router;