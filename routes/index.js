var routes = require('express').Router();

routes.get('/', function(req, res){
//load page -> done with root because of security issues when left out
  res.render('index.ejs', {
    root:     __dirname + '/../views/',
    menuitem: 'main'
  });
});

//TODO: Change naming to video
routes.get('/fileUpload', function(req,res){
  res.render('fileUpload.ejs', {
    root:     __dirname + '/../views/',
    menuitem: 'fileUpload'
  });
});

routes.post('/videoFileUpload', function(req, res){
  // save the video file
  res.send('video File is being uploaded');
});

routes.get('/audioFileUpload', function(req,res){
  res.render('audioFileUpload.ejs', {
    root:     __dirname + '/../views/',
    menuitem: 'audioFileUpload'
  });
});

routes.post('/audioFileUpload', function(req, res){
  // save the audio file
  res.send('audio File is being uploaded');
});

module.exports = routes;
