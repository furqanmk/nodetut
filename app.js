var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('default', {
		title: 'Home',
		classname: 'home',
		names: ['Furqan', 'Muhammad', 'Khan']
	});
});

app.get('/about', function(request, response) {
	response.render('about', {
		title: 'About Us',
		classname: 'about'
	});
});

app.get('*', function(request, response) {
	response.send('Bad route');
});

var server = app.listen(3000, function() {
	console.log('Listening for connections on port 3000...');
});			