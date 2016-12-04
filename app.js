// Load Dependencies
var express = require('express');
var app = express();

// // Add Time-Stamps in front of log messages
// require('console-stamp')(console, '[HH:MM:ss.l]');

// // Define Date Format
// express.logger.format('mydate', function(){
//   var df = require('console-stamp/node_modules/dateformat');
//   return df(new Date(), 'HH:MM:ss.l');
// })
// app.use(express.logger('[:mydate] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));

// Set View Engine To ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Index Page
app.route('/')
  .get(function(req, res){
    res.render('pages/index');
  });

// About Us Page
app.route('/about')
  .get(function(req, res){
    res.render('pages/about');
  });

// Current Page
app.route('/current')
  .get(function(req, res){
    res.render('pages/current');
  });

// Your Project Page
app.route('/your-project')
  .get(function(req, res){
    res.render('pages/your-project');
  });

// Life After Page
app.route('/life-after')
  .get(function(req, res){
    res.render('pages/life-after');
  });

// Contact Page
app.route('/contact')
  .get(function(req, res){
    res.render('pages/contact');
  });

// Set Local Server
app.listen(process.env.PORT || 8080);

console.log('8080 CONNECTED');



