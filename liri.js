//Variables to require certain node packages
require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");

//Variables equal to their keys hidden in the local .env file
var omdbKey = keys.omdb.key;
var bandsKey = keys.bands.key;
var spotify = new Spotify(keys.spotify);

// log user input
var searchType = process.argv[2];
var searchTerm = process.argv.slice(3).join(" ");
var divider = ("\n\n------------------------\n");

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

var spotifyFunc = function (search) {

    spotify.search({ type: 'track', query: search }, function (err, data) {
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
        var cleanData = "\n" + songInfo + divider;

        appendData(cleanData);
        console.log(cleanData);
    });
}

var bandsFunc = function (search) {

    url = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=" + bandsKey;

    axios.get(url).then(function (response) {

        for (var i = 0; i < response.data.length; i++) {

            var event = response.data[i];
            var time = moment(event.datatime).format('LLLL');

            var eventInfo = ["\nVenue: " + event.venue.name + "\nLocation: " + event.venue.city + ", " + event.venue.country + "\nTime: " + time
            ].join("\n");

            var cleanData = eventInfo + divider;

            appendData(cleanData);
            console.log(cleanData);
        }
    });
}

var omdbFunc = function (search) {
    var url = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + search;

    axios.get(url).then(function (response) {

        var movie = response.data;
        var date = moment(movie.Released, "MM-DD-YYYY").format('LL');

        var movieInfo = ["\nTitle: " + movie.Title + "\nDate of release: " + date + "\nIMDB Rating: " + movie.Ratings[0].Value + "\nRotten Tomatoes Rating: " + movie.Ratings[1].Value + "\nCountry of Origin: " + movie.Country + "\nLanguage: " + movie.Language + "\nPlot: " + movie.Plot + "\nDirector: " + movie.Director + "\nActors: " + movie.Actors
        ].join("\n");

        var cleanData = movieInfo + divider;

        appendData(cleanData);
        console.log(cleanData);
    });
}

switch (searchType) {

    case "help":
        helpFunction();
        break;

    case "concert-this":
        bandsFunc(searchTerm);
        break;

    case "spotify-this-song":
        spotifyFunc(searchTerm);
        break;

    case "movie-this":
        omdbFunc(searchTerm);
        break;

    case "do-what-it-says":
        break;

    default:
        console.log("Welcome to Liri Bot.\nSearch help for instructions with what you can do with LIRI Bot.");
}

