var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// Include the users service and let it bind to the application
var userService = require('./services/user.js');
userService.LinkApp(app);

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Direct your browser to http://%s:%s/api/users', host, port);
});
