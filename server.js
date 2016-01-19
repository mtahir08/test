var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
console.log(path.join(__dirname));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
app.set('views', path.join(__dirname, '/client'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req, res){
    console.log(__dirname);
    res.render('index.html');
});
app.post('/add',function(req, res){
    console.log('hello',req.body.name);
    res.send(req.body.name)
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});


