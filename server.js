// Using express: http://expressjs.com/
var express = require('express');

//Webworker
//https://www.youtube.com/watch?v=SfS1xGMg2Qw

// Create the app
var app = express();
// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 9000, listen);
console.log(new Date().toLocaleTimeString());

//Experiment with CPU
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
console.log("Number of CPU = " + numCPUs);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);

var playersTable = [];

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {

    //The Client submitting their Username and IP address to the server to be recognized as a user
	socket.on('IP', function(data) {
		console.log("Received new User information");	
        console.log(data.ip);
        console.log(data.date);
		console.log(data.username);	
			
		playersTable.push(data);
		console.log(playersTable[playersTable.length-1]);
		console.log("Added to table");
		console.log();
	}); 	
	
	//The Client Retrieving the Client's Username from the server
	socket.on('Username', function(data) {
		console.log("Username Request Received");
        console.log(data.ip);
		for(var x=0;x<playersTable.length;x++){
			if(playersTable[x].ip=data.ip){
				console.log(playersTable[x].username);
				data = {username:playersTable[x].username}
				socket.emit('Username', data);
				break;
			}
		}
		console.log("Username Sent.");
		console.log();
    }); 	//42MINS
	
	    
	var gameLevel, BA=0;
	
	//Disconnecting player
    socket.on('disconnect', function() {			
		console.log("Disconnected");	
		console.log();
    });
  }
);