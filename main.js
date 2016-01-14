var http = require('http');
var server = http.createServer(function(request, response) {
	response.writeHeader(200, {"ContentType" : "text/plain"});
	response.write('Hello');
	response.end();
});

console.log('Listening for connections on port 3000');
server.listen(3000);