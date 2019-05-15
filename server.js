const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use('/js', express.static(path.resolve('dist')));

app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.listen(port);