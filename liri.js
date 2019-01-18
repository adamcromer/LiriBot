require("dotenv").config();

var keys = require("./keys.js");
var axios = require("Axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');

var omdb = keys.omdb.key;
var bands = keys.bands.key;

var spotify = new Spotify(keys.spotify);
console.log(keys.spotify);
