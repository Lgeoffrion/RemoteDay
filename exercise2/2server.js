// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7080;
var PORT2 = 7081;

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

function handleRequest(request, response) {
    console.log("Recieved request for URL: " + request.url)
  response.end("All right, I've been thinking. When live gives you lemons? Don't make lemonade. Make life take the lemons back! Get mad! 'I don't want your damn lemons! What am I supposed to do with these?' Demand to see life's manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man who's going to burn your house down! With the lemons! I'm going to get my engineers to invent a combustible lemon that burns your house down! ");
}

function handleRequest2(request, response) {
console.log("Recieved request for URL: " + request.url)
  response.end("I didn’t fail the test. I just found 100 ways to do it wrong.");
}


server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });  

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});
