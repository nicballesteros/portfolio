//Nic Ballesteros
//Created 6/13/21

const express = require('express');

//General Middleware
const cors = require('cors');

//Authentication Middleware
const passport = require('passport');
const passportLocal = require('passport-local');

const expressSession = require('express-session');

//Database API
const { Pool, Client } = require('pg');

//Database Session Store
const pgSession = require('connect-pg-simple')(session);

//Set the script in debug mode
const debugMode = process.env.NODE_ENV === "debug";

const pgPool = new Pool();

// let pgPool = new Pool({
//     //Pool Options
// });



// let query = new Promise((reject, resolve) => {
//     pool.query('query', (err, res) => {
//         if (err) {
//             reject(err);
//             return;
//         }

//         resolve(res);
//     });
// });

// query.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// });

//Create a new express app.
const app = express();

//Set the port to 3000.
const port = 3000;

//Allow access control
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use(expressSession({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, //1 day
    },
    store: new pgSession({
        pool: pgPool,
        tableName: 'user_sessions',
    }),
}));

//Use passport middleware to authenticate users.
app.use(passport);


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