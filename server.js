var express = require('express');
var app = express();
app.use(express.static(__dirname + '/src/'));
app.listen(process.env.PORT || 8080);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });