// const MongoClient = require("mongodb").MongoClient;
// javascript ES6 destructuring
// given an object, we can easily create variables that are set to fields in the object
// example: var user = {name: 'calvin', age: 25};
// var {name} = user;
// this creates a variable name that is set to the name property of the user object
// the line below is identical to the first comment
// we can pull out other fields by separating with commas
const {MongoClient, ObjectID} = require("mongodb");

// the first argument is the url of the database (AWS, Heroku), or localhost
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        console.log("Unable to connect to MongoDB server.");
    }
    else{
        console.log("Connected to MongoDB server.");
    }

    // findOneAndUpdate is similar to findOneAndDelete
    // findOneAndUpdate(filter, update, options, callback)
    // when no callback is provided, a promise is returned
    // look at options on mongodb docs
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("59954b0df19e5ab7c8e2cceb")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     // one of the options is returnOriginal, which by default is set to true
    //     // this returns the original document before being modified
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("59950f2181804153a23e6c64")
    }, {
        $set: {
            name: "Calvin"
        },
        $inc: {
            age: 5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
