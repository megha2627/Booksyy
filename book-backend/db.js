const { Pool } = require('pg');//pool is generally used to set up cleint side conncetion from the pg we use pool for client side connections

require('dotenv').config();
//dotenv  file is generally used to load enviroment variables from .env file 

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;
