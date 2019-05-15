const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static('dist'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.listen(port);