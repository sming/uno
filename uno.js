var express = require('express');
var deck = require('./deck.js');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){ 
	res.type('text/plain');
    res.send('Uno');
});

app.get('/deck', function(req, res) {
	res.json(deck.buildEntireDeck());
});

app.get('/deck/shuffle', function(req, res) {
	res.json(deck.shuffle());
});

app.get('/deck/next', function(req, res) {
	console.log(req, res);
	res.json(deck.next());
});

// This has to go last or else everything is treated as an error
require('./errorHandling.js').register(app);

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});

//console.log();

