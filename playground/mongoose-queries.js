const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// note! If our id is incorrect, mongoose will not throw an error, it will just
// return an empty array or a null
// the id can also just be an error (extra numbers for example), which will throw an erro
// var id = "59968ad71158c5f4a32bf38e11";

// mongodb has a method to validate objectID's
// if(!ObjectID.isValid(id)){
//     console.log("ID not valid!");
// }

// Todo.find({
//     // mongoose will create an objectID for us
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });
//
// Todo.findOne({
//     // mongoose will create an objectID for us
//     _id: id
// }).then((todo) => {
//     console.log("Todos", todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("id not found");
//     }
//     console.log("Todo by id", todo);
// }).catch((err) => console.log(err));

var id = "59961a0f06b348cc3605574c"
User.findById(id).then((todo) => {
    if(!todo){
        return console.log("id not found");
    }
    console.log(JSON.stringify(todo, undefined, 2));
}).catch((err) => console.log(err));
