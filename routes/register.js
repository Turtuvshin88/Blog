const express = require('express');
const connection = require('../connection/connection');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/Register', function(request, response) {
	response.render("Register");
});


router.post('/Register', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;
 

    connection.query('INSERT INTO `accounts` (`username`, `password`, `email`) VALUES (?,?,?,?);', [username, password, email],
        function (error, results, fields) {
            photo.mv('./public/css/images/'+ fileName);
            response.redirect('/login');

        });
}) 

module.exports = router;