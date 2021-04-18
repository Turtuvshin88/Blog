var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');
var dotenv = require('dotenv');
var connection = require('./connection/connection');
var fileUpload = require('express-fileUpload');

var Test = require('./routes/test');
var Login = require('./routes/login');
var Register = require('./routes/register');
var admin = require('./routes/admin');
var editUser = require('./routes/edit-user');
var deleteUser = require('./routes/delete-user');
var CreateUser = require('./routes/createUser');
var post = require('./routes/post');
var addPost = require('./routes/addPost');
var deletePost = require('./routes/deletePost');
var editPost = require('./routes/editPost');
var singlePost = require('./routes/singlePost');

dotenv.config();
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(fileUpload(__dirname + '/public/css'));

app.set("views", path.join(__dirname + '/view'));
app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/', admin);
app.use('/', Register);
app.use('/', Login);
app.use('/', Test);
app.use('/', editUser);
app.use('/',deleteUser);
app.use('/', CreateUser);
app.use('/', post);
app.use('/', addPost );
app.use('/', deletePost );
app.use('/', editPost );
app.use('/', singlePost );


app.listen(process.env.SERVER_PORT, () => console.log('Server start ${process.env.SERVER_PORT} '));