
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.locals.pretty = true;

app.set('view engine', 'jade');
app.set('views', './views');
app.use(bodyParser.urlencoded({entended:false}));

app.get('/form', function(req, res){
	res.render('form');
});

app.get('/form_receiver', function(req, res){
	var title = req.query.title;
	var description = req.query.description;
	
	res.send(title+' '+description);
	
});

app.post('/form_receiver', function(req, res){
	var title = req.body.title;
	var description = req.body.description;
	
	res.send(title+' '+description);
});

app.get('/topic/:id', function(req, res){
	var topics = [
	'first topic',
	'second topic',
	'third topic'
	];
	
	var output = `
		<a href="/topic/0">first</a><br>
		<a href="/topic/1">second</a><br>
		<a href="/topic/2">third</a><br>
		${topics[req.params.id]}
	`;
	
	res.send(output);
});


app.get('/', function(req, res){
	res.send('welcome');
});

app.use(express.static('public'));

app.get('/template', function(req, res){
	res.render('temp', {_time:Date(), _title:'hello'});

});

app.get('/login', function(req, res){
	res.send('login please');
});

app.get('/image', function(req, res){
	res.send('hello image, <img src="/hello.png">');

});

app.get('/dynamic',function(req, res){
	var time = Date();
	var lis = '';
	for(var i=0; i<5; i++){
		lis= lis+ '<li>hello</li>';
	}
	
	var output = `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>	
		<head>
		<body>
			hello, dynamic!
			<ul>
				${lis}
			</ul>
			${time}
		</body>
	</html>
	`;
	
	res.send(output);
});

app.listen(3000, function(){
	console.log('connected 3000 port');	
});