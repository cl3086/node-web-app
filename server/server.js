const express = require("express");
// to handle HTTP POST request in express, we need to install a middleware module called body-parser
// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
const bodyParser = require("body-parser");

// destructuring
const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");

var app = express();

app.use(bodyParser.json());

// when you want to create a resource, we use the post HTTP method and we
// send that resource as the bodyParser
// this will send a JSON object to the server
app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(16000, () => {
    console.log("Started on port 16000");
});

module.exports = {app};
