var express = require('express');
var card = require('./card.js');
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){ 
	res.type('text/plain');
    res.send('Uno');
});

app.get('/card/next', function(req, res){
	res.json(card.next());
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});

require('./errorHandling.js').register(app);

//console.log();

