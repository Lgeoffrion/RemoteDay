// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);



server.listen(PORT, function () {
    console.log("Connected");
});


// function handleRequest(req, res) {

//     // Capture the url the request is made to
//     var path = req.url;
//     // Depending on the URL, display a different HTML file.
//     switch (path) {

//         case "/index":
//             return displayRoot(path, req, res);

//         case "/foods":
//             return displayFoods(path, req, res);

//         case "/movies":
//             return displayMovies(path, req, res);

//         case "/css":
//             return displayCss(path, req, res);

//         default:
//             return display404(path, req, res);
//     }
// }
// function displayRoot(url, req, res) {
//     fs.readFile(__dirname + "/index.html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }

// function displayFoods(url, req, res) {
//     fs.readFile(__dirname + "/foods.html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }

// function displayMovies(url, req, res) {
//     fs.readFile(__dirname + "/movies.html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }

// function displayCss(url, req, res) {
//     fs.readFile(__dirname + "/css.html", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }


//Dry Code
function handleRequest(req, res) {
    var path = req.url;
    switch (path) {
        case "/index":
            return displayPage("/index.html",res)
        case "/foods":
            return displayPage("/foods.html", res);
        case "/movies":
            return displayPage("/movies.html", res);
        case "/css":
            return displayPage("/css.html", res);
        default:
            return display404(path, req, res);
    }
}
function displayPage(url, res) {  
    console.log("display name", url);
    fs.readFile(__dirname + url, function(err, data) {
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  }


function display404(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
}