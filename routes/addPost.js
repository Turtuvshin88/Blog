var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
var path = require('path');

router.get('/addPost', function(request, response) {
	response.render("addPost");
});

router.post('/addPost', function(request, response) {
 
    var title = request.body.title;
    var about =request.body.about;
    var photo = request.files.postImage;
    var fileName = photo.name;
    var date= Date();
    var id = request.params.id;

    photo.mv('./public/images'+ fileName);

    console.log(request.body.title);
    
        connection.query('INSERT INTO `post`( title, about, picture, date) VALUES (?,?,?,?);', [title, about, fileName,date],
         function(error, results, fields) {
            if (!error) {
                
                response.redirect('post');
            } else {
                console.log(error);
            }			
        
        });
    
});
module.exports = router