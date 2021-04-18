const express = require('express');
const connection = require('../connection/connection');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/admin', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT * FROM accounts', function ( error, results, field){
			console.log(results);
		response.render("admin", {users: results });
		});
	} else {
		response.render("Login", { error: "please login" });
	}
});



module.exports = router;