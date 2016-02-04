module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
    app.get('/ping', function(req, res) {
        res.send(200, {text: "All good. You don't need to be authenticated to call this"});
    });

    app.get('/secured/ping', function(req, res) {
        res.send(200, {text: "All good. You only get this message if you're authenticated"});
    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};