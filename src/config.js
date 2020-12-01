"use strict";

const assert = require( "assert" );
const dotenv = require( "dotenv" );

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
// const { PORT,
//    HOST,
//    HOST_URL,
//    COOKIE_ENCRYPT_PWD,
//    SQL_SERVER,
//    SQL_DATABASE,
//    SQL_USER,
//    SQL_PASSWORD,
// } = process.env;

// const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

// // validate the required configuration information
// assert( PORT, "PORT configuration is required." );
// assert( HOST, "HOST configuration is required." );
// assert( HOST_URL, "HOST_URL configuration is required." );
// assert( COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD configuration is required." );
// assert( SQL_SERVER, "SQL_SERVER configuration is required." );
// assert( SQL_DATABASE, "SQL_DATABASE configuration is required." );
// assert( SQL_USER, "SQL_USER configuration is required." );
// assert( SQL_PASSWORD, "SQL_PASSWORD configuration is required." );

// export the configuration information

const PORT="8080"
const HOST="localhost"
const  HOST_URL="http://localhost:8080"
const  COOKIE_ENCRYPT_PWD="superAwesomePasswordStringThatIsAtLeast32CharactersLong!"


const SQL_USER="dbuser"
const SQL_PASSWORD="P@55w0rd"
const SQL_DATABASE="calendar"
const SQL_SERVER="3.236.106.156"

const SQL_ENCRYPT="false"

module.exports = {
   port: PORT,
   host: HOST,
   url: HOST_URL,
   cookiePwd: COOKIE_ENCRYPT_PWD,
   sql: {
       server: SQL_SERVER,
       database: SQL_DATABASE,
       user: SQL_USER,
       password: SQL_PASSWORD,
       options: {
           encrypt: SQL_ENCRYPT
       }
   },
};