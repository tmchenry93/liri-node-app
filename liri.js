// Variables needed 
var Twit = require("twitter");
var twitter = require('./keys.js');
var request = require("request");
var twit = new Twit(twitter);
var fs = require("fs");
var spotify = require('spotify');
var argTwo = process.argv[2];

	// This will show your last 20 tweets and when they were created at in your terminal
	if (argTwo === "my-tweets"){
		var params = {count: 20, screen_name: "tianna_mchenry"};
		function Data(err, data, response) {
    		for (var i = 0; i < data.length; i++){
    			console.log("\n" + data[i].text + "\n");
    		};
		};

		twit.get('statuses/user_timeline', params, Data);
	};

	// This will output the following information to the terminal
	if (argTwo === "do-what-it-says"){

		fs.readFile("./random.txt", "utf8", function(error, data){
			spotify.search({ type: "track", query: '"' + data + '"'}, Info);

			function Info(err, data) {
	    		if ( err ) {
	        		console.log('Error occurred: ' + err);
	        		return;
	    		}	
				
				for (var i = 0; i < data.tracks.items.length; i++){
					console.log(data.tracks.items[i].album.artists[0].name);
					console.log(data.tracks.items[i].name);
					console.log(data.tracks.items[i].album.href);
					console.log(data.tracks.items[i].album.name + "\n");
				};
			};
		});
	};

	// This will show the following spotify information about the song in your terminal
	if (argTwo === "spotify-this-song"){
		// take in the command line arguments
		var nodeArgs = process.argv;
		var songTitle = [];
		
		// If a song has been entered into the command line
		if (nodeArgs > 3){
			// capture all the words in the address, ignoring the first three node arguments 
			for (var i = 3; i < nodeArgs.length; i++){
				var song = nodeArgs[i];
				songTitle.push(song);
			}

			var song = songTitle.join(" ");

			spotify.search({ type: "track", query: '"' + song + '"'}, Info);

			function Info(err, data) {
	    		if ( err ) {
	        		console.log('Error occurred: ' + err);
	        		return;
	    		}	
				
				for (var i = 0; i < data.tracks.items.length; i++){
					console.log(data.tracks.items[i].album.artists[0].name);
					console.log(data.tracks.items[i].name);
					console.log(data.tracks.items[i].album.href);
					console.log(data.tracks.items[i].album.name + "\n");
				};
			};
		// If no song was entered into the command line
		} else{
			spotify.search({ type: "track", query: 'The Sign'}, Info);

			function Info(err, data) {
	    		if ( err ) {
	        		console.log('Error occurred: ' + err);
	        		return;
	    		}	
					console.log(data.tracks.items[3].album.artists[0].name);
					console.log(data.tracks.items[3].name);
					console.log(data.tracks.items[3].album.href);
					console.log(data.tracks.items[3].album.name);
			};
		};
	};

	// This will output the following movie information to your terminal
	if (argTwo === "movie-this"){
			// take in the command line arguments
			var nodeArgs = process.argv;
			var movieTitle = [];

		// If a movie was entered into the command line
		if (nodeArgs.length > 3){
			// capture all the words in the address, ignoring the first three node arguments 
			for (var i = 3; i < nodeArgs.length; i++){
				var movie = nodeArgs[i];
				movieTitle.push(movie);
			}

			var title = movieTitle.join("+");

			// pulling request from the omdb site
			request("http://www.omdbapi.com/?t=" + title, function(error, response, body){
					
				// if the request was successful
				if (!error && response.statusCode === 200){
					var b = body.split(",")
					console.log(b);
				};
			});
		// If no movie was entered into the command line
		} else{
			request("http://www.omdbapi.com/?t=mr+nobody", function(error, response, body){
				var c = body.split(",");
				console.log(c);
			});
		}
		
	};
