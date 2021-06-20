//Nic Ballesteros
//Created 6/13/21

//Get ENV Variables.
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

//General Middleware
const cors = require('cors');

//Authentication Middleware
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const session = require('express-session');

//Set the script in debug mode
const debugMode = process.env.NODE_ENV === "debug";

const Postgres = require('./db/postgres');

let poolOptions = {
    host: "localhost",
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
};

let sessionStoreOptions = {};

let pg = new Postgres(poolOptions, session, sessionStoreOptions);

//Create a new express app.
const app = express();

//Set the port to 3000.
const port = 3000;

//Allow access control
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, //1 day
    },
    store: pg.store,
}));

//pg.pool.query should work

//Use passport middleware to authenticate users.
passport.use(new LocalStrategy((username, password, cb) => {
    
}))

app.use(passport.initialize());
app.use(passport.session());


/**
 * API Endpoint '/api/login'
 * 
 *  This endpoint is used to authenticate a local user to gain access to a priviledged api endpoint.
 * 
 * 
 */

app.post('/api/login', (req, res) => {
    
});

app.get('/', (req, res) => {
    res.send(`<h1>Hello World (Sessions)</h1>`);
});

app.listen(port, () => {
    console.log(`portfolio API backend is running on port ${port}`);
});