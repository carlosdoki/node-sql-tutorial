"use strict";
require("appdynamics").profile({
    controllerHostName: '',
    controllerPort: 443,
    controllerSslEnabled: true,  // Set to true if controllerPort is SSL
    accountName: '',
    accountAccessKey: '', //required
    applicationName: 'zTeste',
    tierName: 'Teste',
    nodeName: 'Teste'
   });
            
const config = require( "./config" );
const server = require( "./server" );

const startServer = async () => {
    try {
        // create an instance of the server application
        const app = await server( config );
 
        // start the web server
        await app.start();
 
        console.log( `Server running at http://${ config.host }:${ config.port }...` );
    } catch ( err ) {
        console.log( "startup error:", err );
    }
 };
 
 startServer();