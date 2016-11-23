// Load Dependencies
var express = require('express');
var app = express();

// Set View Engine To ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Index Page
app.get('/', function(req, res){
  res.render('pages/index');
});

app.listen(process.env.PORT || 8080);

console.log('8080 CONNECTED');



