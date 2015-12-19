// Requireds
var express = require('express'),
    app = express();

// Configs
var host = 'localhost',
    port = 3000;

// Static files
app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/fonts', express.static('fonts'));

// Index
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  }
  console.info('----\n==> ✅  The Website is running');
  console.info('==> 💻  Open http://%s:%s in a browser to view the app.', host, port);
});