// we don't have to require mongoose.js because we are just creating a model
var mongoose = require("mongoose");

// creates a new model, Todo is now a constructor to create new models
// the argument it takes is an object that has all the information
var Todo = mongoose.model("Todo", {
    text: {
        // required is a validator for mongoose (it is saying the field must exist)
        // same with minlength
        // trim trims off leading or ending whitespace
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        // default will set a default value (todo is by default not completed yet)
        type: Boolean,
        default: false
    },
    completedAt: {
        // Unix time stamp is just a number
        // completedAt does not exist until completed is true
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: "Cook dinner"
// });

// .save will save the information to the database
// returns a promise
// newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (err) => {
//     console.log("Unable to save todo");
// });

// var newTodo = new Todo({
//     text: "Learn NodeJS",
//     completed: true,
//     completedAt: 17
// });
//
// newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (err) => {
//     console.log("Unable to save todo");
// });

module.exports.Todo = Todo;
