//importing express and body parser to take in data from POST request

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
//alloweing body parser to take in json data
app.use(bodyParser.json());

//creating POST request
app.post('/createdata', function (req, res) {
    res.send("JSON data sent")
    //storing the json data in a variable
    data = req.body;

});

//creating GET request
app.get('/getdata', function (req, res) {
    console.log(data);
    res.json(data)
});


app.listen(3000, function () {
    console.log("started server on port 3000");
})
