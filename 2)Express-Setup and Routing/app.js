var express 	= require('express');
var app 		= express();
var bodyParser  = require('body-parser');
var path 		= require('path');
var port        = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('./index.html');
});

app.get('/new', function(req, res){
	res.send('hello there');
});


app.listen(port, function(){
	console.log("Server is up on port: " + port)
});
