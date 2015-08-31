function register(app) {
	    // custom 404 page
	app.use(function(req, res, next){ res.type('text/plain');
	            res.status(404);
	            res.send('404 - Not Found');
	});

	    // custom 500 page
	app.use(function(err, req, res, next){ console.error(err.stack);
	            res.type('text/plain');
	            res.status(500);
	            res.send('500 - Server Error');
	});
}

module.exports.register = register;