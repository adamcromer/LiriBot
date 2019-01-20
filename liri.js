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

// log user input
var searchType = process.argv[2];
var searchTerm = process.argv.slice(3).join(" ");
var divider = ("\n\n------------------------\n\n")

var helpFunction = function () {
    console.log("Liri Bot is a tool which uses API Data from Spotify, Bands In Town, and Open Movie Database. \nIn the command line after typing 'node liri.js' type 'concert-this' followed by a band name to search for available concerts, \n'spotify-this-song' followed by a song name to see information about that song, \n'movie-this' and a movie title to see information about that movie, \nor 'do-what-it-says' for a surprise.");
}

var appendData = function (data) {
    fs.appendFile("log.txt", data, function (err) {
        if (err) {
            throw err;
        }
    });
}

var spotifyFunc = function () {
    spotify.search({ type: 'track', query: searchTerm }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var song = data.tracks.items[0];

        var songInfo = [
            "Song name: " + song.name +
            "\nArtist: " + song.artists[0].name +
            "\nAlbum name: " + song.album.name +
            "\nOn Spotify: " + song.external_urls.spotify
        ].join("\n\n");
        var cleanData = songInfo + divider;

        appendData(cleanData);
        console.log(cleanData);
    });
}

switch (searchType) {

    case "help":
        helpFunction();

    case "concert-this":
        break;

    case "spotify-this-song":
        spotifyFunc();
        break;

    case "movie-this":
        break;

    case "do-what-it-says":
        break;

    default:
        console.log("Welcome to Liri Bot.\nSearch help for instructions with what you can do with LIRI Bot.");
}