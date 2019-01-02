var path    = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes');


/*
  Express.js setup, loading the config, setting render engine and template
  folder, defining on which port the application runs, as well as providing
  static content for (public -> assets) and the bower components (public).
*/
var app = express();
app.use('/', routes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.listen(5005, function(){
  console.log('LOGGER: App started on localhost:5005')
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({
  extended: false
}));
