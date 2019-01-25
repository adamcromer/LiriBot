# <b>LIRI Bot</b>

LIRI Bot is a Command Line Interface or CLI which requests data from Spotify, Bands In Town, and the Online Movie Database and using their API to give user song, concert, or movie information. 
<br><br>

## <b>How To Use</b>

To run the LIRI Bot you must run the program liri.js in the command line of node and then a valid search function. You must always input node and liri.js as the first two arguments.

**Example**: "node liri.js spotify-this-song subterranean homesick blues"
<img align="center" background-color="white" src="images/blues.jpg" width="100%">

If you don't put in any argument it will explain how to ask for help.

After each valid search the Song, Concert, or Movie information will be added to the bottom of a log.txt file. If you do not have a log.txt file it will create one.
<br><br>


### <b>Help</b>

Type help as the third argument and the console will log information to inform or remind the user of acceptable arguments.
<br>
<img align="center" background-color="white" src="images/help.jpg" width="100%">
<br>

### <b>Search Spotify</b>

To search for song information type:

**"spotify-this-song" or "spotify"**


as the third argument and the song name as the fourth argument. The Spotify API will provide you information about the song including: Artist, Album Name, and a link to listen on Spotify.


**Example**: "node liri.js spotify-this-song song name here"
<img align="center" background-color="white" src="images/spotify.jpg" width="100%">

A default search will happen if a song is not declared.
<br><br>

### <b>Search Bands In Town</b>

To search for song information type:

**"concert-this" or "bands" or "bandsintown"**

as the third argument and the artist name as the fourth argument. The Bands In Town API will provide you information about upcoming concerts by the provided artist including: Venue, Location, and Time.


**Example**: "node liri.js concert-this artist name here"
<img align="center" background-color="white" src="images/bands.jpg" width="100%">


A default search will happen if an artist is not declared.

<br>

### <b>Search OMDB</b>

To search for movie information type:

**"movie-this" or "movie" or "omdb"**

as the third argument and the movie name as the fourth argument. The OMDb API will provide you information about coming up concerts by the provided artist including: Date of Release, IMDB and Rotten Tomatoes ratings, Country of Origin, Language, Plot Summary, Director, and actors.

**Example**: "node liri.js movie-this movie name here"
<img align="center" background-color="white" src="images/movie.jpg" width="100%">

A default search will happen if a movie is not declared.
<br><br>

### <b>Random Search</b>

To do a surprise or random search type:

**"do-what-it-says" or "random"**

as the third argument and either spotify, bands, or omdb as the fourth argument for a random search which reads information from the random.txt file.

If a fourth argument is not listed it will provide random searches for all three types.
<br><br>

## <b>Install This Program</b>


Clone this repository.

You must create API Keys from [Spotify,](https://developer.spotify.com/my-applications/#!/) [Bands In Town,](http://www.artists.bandsintown.com/bandsintown-api) and [OMDb.](http://www.omdbapi.com/apikey.aspx)

Create a .env file formatted like this with your API Keys instead of where it says API Key. Spotify requires an ID key and a secret Key.

<img align="center" background-color="white" src="images/env.jpg" width="100%">

Open up your folder container the LIRI Bot files in the command line. **'CTRL + `**<br>

Type **'npm install'**
<img align="center" background-color="white" src="images/npm.jpg" width="100%">

And then your file should be good to go. You can now type your arguments in to the command line.

<br>

[Made by Adam Cromer, 2018.](http://www.adamcromer.com)

