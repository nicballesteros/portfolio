//Nic Ballesteros
//Created 06/17/21

//Database API
const { Pool, Client } = require('pg');

//Database Session Store
let pgSession; 
const debugMode = process.env.NODE_ENV === "debug";



class Postgres {
    /**
     * @description A class constructor for the Postgres Class. This class will
     * hold the session store object and the postgres connection object. This class
     * was made to consolidate all postgres code in one file.
     * @param {Object} poolOpts options for the pool that is going to be created.
     * @param {Object} sessStoreOpts options for the session store to be created.
     */
    constructor(poolOpts, session, sessStoreOpts) {
        //poolOps is the same options object as pg.Pool().
        //sessStoreOpts is the same options object as connect-pg-simple.

        pgSession = require('connect-pg-simple')(session);

        //Create a new pool that will connect to the postgres server.
        this.pgPool = new Pool(poolOpts);

        //Set the new pool that was made as the pool that the session store will
        //connect to.
        sessStoreOpts.pool = this.pgPool;

        //Create a session store object that can be used by express-session.
        this.store = new pgSession(sessStoreOpts);
    }
}

module.exports = Postgres;

// let pgPool = new Pool({
//     //Pool Options
// });

// pgPool.connect((err, client, release) => {
//     if (err) {
//         return console.error('Error acquiring client', err.stack)
//       }
//       client.query('SELECT NOW()', (err, result) => {
//         release()
//         if (err) {
//           return console.error('Error executing query', err.stack)
//         }
//         console.log(result.rows)
//       })
// });

// pool.connect((err, client, release) => {
//     if (err) {
//       return console.error('Error acquiring client', err.stack)
//     }
//     client.query('SELECT NOW()', (err, result) => {
//       release()
//       if (err) {
//         return console.error('Error executing query', err.stack)
//       }
//       console.log(result.rows)
//     })
//   })

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