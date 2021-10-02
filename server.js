const FileMetadata = require('./controllers/routes/file_metadata');
var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static('public'));

app.use('/api', FileMetadata)

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port + ' link to local host: ' + 'http://localhost:' + port);
});
