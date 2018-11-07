// Using express: http://expressjs.com/
const express = require('express');
// Create the app
const app = express();
// Set up the server
// process.env.PORT is related to deploying on heroku
const PORT = process.env.PORT || 9000
// const server = app.listen(process.env.PORT || 9000, listen);
app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
	
})
// console.log(new Date().toLocaleTimeString());

// //Experiment with CPU
// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;
// console.log("Number of CPU = " + numCPUs);

// This call back just tells us that the server has started
// function listen() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://' + host + ':' + port);
// }

app.use(express.static('public'))