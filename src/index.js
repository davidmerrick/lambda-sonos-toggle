'use strict';

import axios from 'axios'

exports.handler = (event, context, callback) => {
    console.log('Received event:', event.clickType);

    var auth = {
        username: process.env.AUTH_USERNAME,
        password: process.env.AUTH_PASSWORD
    };

    var options = {
        auth: auth
    };

    console.log("Playing via Sonos API server...");
    axios.get(`${process.env.SONOS_API_SERVER}/playpause`, options)
        .then(response => {
            console.log("SUCCESS.");
            return callback();
        })
        .catch(error => {
            console.error("ERROR");
            return callback();
        });
};
