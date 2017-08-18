// we don't have to require mongoose.js because we are just creating a model
var mongoose = require("mongoose");

var User = mongoose.model("User", {
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

// var newUser = new User({
//     email: "   c  "
// });
// newUser.save().then((doc) => {
//     console.log(doc);
// }, (err) => {
//     console.log("Unable to save user");
// });

// var secondUser = new User({
//     email: "  calvinl.nyci@gmail.com    "
// });
// secondUser.save().then((doc) => {
//     console.log(doc);
// }, (err) => {
//     console.log("Unable to save user");
// });

module.exports = {
    User
};
