var mongoose = require("mongoose");

// this tells mongoose that we are using the built-in promise libraries
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

// we have to export mongoose now
module.exports = {
    mongoose
};
