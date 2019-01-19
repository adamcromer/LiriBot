//Variables to require certain node packages
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');

//Variables equal to their keys hidden in the local .env file
var omdbKey = keys.omdb.key;
var bandsKey = keys.bands.key;
var spotify = new Spotify(keys.spotify);

//Variables to get user input  from the comand line
var siteToSearch = process.argv[2];
var subjectToSearch = process.argv[3];

switch (siteToSearch) {

    case "help":
        console.log("Liri Bot is a tool which uses API Data from Spotify, Bands In Town, and Open Movie Database. In the command line after typing 'node liri.js' type 'concert-this' followed by a band name to search for available concerts, 'spotify-this-song' followed by a song name to see information about that song, 'movie-this' and a movie title to see information about that movie, or 'do-what-it-says' for a surprise.");

    case "concert-this":
        break;

    case "spotify-this-song":
        break;

    case "movie-this":
        break;

    case "do-what-it-says":
        break;

    default:
        console.log("Welcome to Liri Bot.\nSearch help for instructions with what you can do with LIRI Bot.");
}