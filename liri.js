// Variables needed 
var twitter = require('./keys.js');
var request = require("request");
var argTwo = process.argv[2];
var fs = require("fs");
var spotify = require('spotify');
var argThree = process.argv[3];

	// // This will show your last 20 tweets and when they were created at in your terminal
	// if (argTwo === "my-tweets"){

	// };

	// // This will output the following information to the terminal
	// if (argTwo === "do-what-it-says"){
	// 	fs.appendFile("random.txt", function(err){

	// 	});
	// };

	// This will show the following spotify information about the song in your terminal
	if (argTwo === "spotify-this-song"){
		// take in the command line arguments
		var nodeArgs = process.argv;
		
		// capture all the words in the address, ignoring the first three node arguments 
		for (var i = 3; i < nodeArgs.length; i++){
			var spotifySong = nodeArgs[i];
		}

		spotify.search({ type: argThree, query: 'dancing in the moonlight' }, function(err, data) {
    		if ( err ) {
        		console.log('Error occurred: ' + err);
        		return;
    		}

    		console.log(data);
 
		});
	};

	// This will output the following movie information to your terminal
	if (argTwo === "movie-this"){
		
		// take in the command line arguments
		var nodeArgs = process.argv;
		
		// capture all the words in the address, ignoring the first three node arguments 
		for (var i = 3; i < nodeArgs.length; i++){
			var movieTitle = nodeArgs[i] + "+";
		}

		// pulling request from the omdb site
		request("http://www.omdbapi.com/?t=" + movieTitle, function(error, response, body){
			
			// if the request was successful
			if (!error && response.statusCode === 200){
				console.log(body);
			}
		});
	};
	