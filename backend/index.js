//Nic Ballesteros
//Created 6/13/21

const express = require('express');
const passport = require('passport');

const { Pool, Client } = require('pg');

const pool = new Pool();

let query = new Promise((reject, resolve) => {
    pool.query('query', (err, res) => {
        if (err) {
            reject(err);
            return;
        }

        resolve(res);
    });
});

query.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});

//Create a new express app.
const app = express();

//Set the port to 3000.
const port = 3000;

//Allow access control
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());


/**
 * API Endpoint '/api/login'
 * 
 *  This endpoint is used to authenticate a local user to gain access to a priviledged api endpoint.
 * 
 * 
 */

app.post('/api/login', (res, req) => {
    
});

app.listen(port, () => {
    console.log(`portfolio API backend is running on port ${port}`);
});