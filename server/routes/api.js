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
router.get('/articles', (req, res, next) => {
    console.log('Requesting articles from newsapi.org ...');
    const url = `${API}/articles?source=${source}&apiKey=${apiKey}`;

    // Send request
    axios.get(url)
    .then(response => {
        console.log('Request successful.');
        // Return response
        res.status(200).json(response.data.articles);
    })
    .catch(err => {
        console.log('Request unsuccessful:');
        // Request error from API
        if(err.response) {
            console.log('\n***ERROR: api.js:');
            console.log('   status:', err.response.status);
            console.log('   details: ' + err.response.data.code + ': ' + err.response.data.message);
        }
        // No response from API
        else if(err.request) {
            console.log('\n***ERROR: api.js: No Response:')
            console.log('   request: ', err.request);
        }
        // error catch (last try)
        else {
            console.log('\n***ERROR: api.js: ', err.message);
        }
        next(err);
    });
})

module.exports = router;