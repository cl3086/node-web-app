// const MongoClient = require("mongodb").MongoClient;
// javascript ES6 destructuring
// given an object, we can easily create variables that are set to fields in the object
// example: var user = {name: 'calvin', age: 25};
// var {name} = user;
// this creates a variable name that is set to the name property of the user object
// the line below is identical to the first comment
// we can pull out other fields by separating with commas
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log("Random, unique object _id", obj);

// the first argument is the url of the database (AWS, Heroku), or localhost
// the /TodoApp specifies the database to create/use
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err) {
		// return so it will not try to use the db object if errors
		return console.log("Unable to connect to MongoDB server.");
	}

	console.log("Connected to MongoDB server.");
	const db = client.db("TodoApp");

	// takes in string name for collection
	// insertOne lets you insert a document (a record in noSQL)
	// you will see a _id, it is an identifier for a document (similar to id in mySql)
	// it does not auto-increment
	// we can explicitly set an id by adding an _id field (or it will be defaulted)
	// in the ObjectID's, the timestamp is implanted in there (only if default objectId)
	db.collection("Todos").insertOne({
		text: "Something to do",
		completed: false
	}, (err, result) => {
		if(err){
			console.log("Unable to insert todo: ", err);
		}
		else{
			// ops will be an array of all the documents inserted
			// _id is a field in one of those documents
			console.log(JSON.stringify(result.ops, undefined, 2));
			console.log(result.ops[0]._id.getTimestamp());
		}
	});

	// we can add our own _id field that will replace the randomly generated ID
	db.collection("Users").insertOne({
		name: "Calvin",
		age: 21,
		location: "New York"
	}, (err, result) => {
		if(err){
			console.log("Unable to insert to Users: ", err);
		}
		else{
			console.log(JSON.stringify(result.ops, undefined, 2));
		}
	});

	client.close();
});
