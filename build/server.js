var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'src')));
app.set('port', process.env.PORT || 8090);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});