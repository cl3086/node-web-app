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
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err){
		console.log("Unable to connect to MongoDB server.");
	}
	else{
		console.log("Connected to MongoDB server.");
	}

	// 3 methods to delete data
	// deleteMany (delete all documents with the query) (query is case sensitive!)
	// db.collection("Todos").deleteMany({text: "eat lunch"}).then((result) => {
	//     console.log(result);
	// });

	// deleteOne (delete only one document that matches the query)
	// db.collection("Todos").deleteOne({text: "eat lunch"}).then((result) => {
	//     console.log(result);
	// });

	// findOneAndDelete (deletes one document AND returns it), in the promise below it is in 'result'
	// db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
	//     console.log(result);
	// });

	let db = client.db("TodoApp");

	db.collection("Users").deleteMany({name: "Calvin"}).then((result) => {
		console.log(result);
	});

	db.collection("Users").findOneAndDelete({_id: new ObjectID("59950f25fc973c53b91cc2a6")}).then((result) => {
		console.log(result);
	});

	client.close();
});
