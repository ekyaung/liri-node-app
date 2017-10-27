var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");

var request = require('request');
var fs = require('fs');

var getTweet = function(){
	var client = new bird(keys);
	var param = {
		screen_name: "elk0408"
	};
	client.get("statuses/user_timerline", params, function(error, tweets, response){
		if(!error){
			for(var i = 0; i < tweets.length, i++){
				console.log(tweets[i].created_at);
				console.log(tweets[i].text);

			}
		}
	});
};


var music = new spotify({
	id: "ad2d6036180b48c69c4d62ca56a0cf16",
	secret:"49540919342a40788060e8bb8677516b"
}); 

var musicNames = function(artist){
	return artist.name;
};

var playSpotify = function(songName){
	if(songName === undefined){
		songName = "Please enter another name";
	}
	music.search(
	{
		type:"track",
		query: songName
	},
	fuction(err, data){
		if(err){
			console.log("error: " + err);
			return;
		}
		var song = data.tracks.items;
		for (var i = 0; i < songs.length; i++){
			console.log("artist: " + songs[i].artists.map(getArtistName));
			console.log("song name: " + songs[i].name);
			console.log("preview: " + songs[i].preview_url);
			console.log("album: ")+ songs[i].album.name;

		}
	};
};

var getMovie = function(movieName){
	if (movieName === undefined){
		movieName = "hello";
	}

	var url = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=40e9cece";

request(url, function(error, response, body){
	if(!error && repsonse.statusCode === 200){
		var jsonData = JSON.parse(body);

      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
	}
});

};

var doIt = function(){
	fs.readFile("random.txt", "utf-8", function(error, data){
		console.log(data);
		var dataInside = data.split(",");
		if(dataInside.length === 2){
			pick(dataInside[0], dataInside[1]);

		}
		else if(dataInside.length === 1){
			pick(dataInside[0]);
		}
	});
};

var choose = function(caseData, functionData){
	switch(caseData){
		case "my-tweets":
		getTweet();
		break;
		case "spotify-this-song":
		playSpotify();
		break;
		case: "do-it":
		doIt();
		break;
		case"my-movie":
		getMovie();
		break;
		default:
			console.log("TRY AGAIN??");
	}
};

var run = function(argOne, argTwo){
	pick(argOne, argTwo);
};

run(process.argv[2], process.argv[3]);
