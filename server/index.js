const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => console.log('Now listening on port: ' + port));