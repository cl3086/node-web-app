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

	let db = client.db("TodoApp");

	// .find() with no arguments says we do not want to query, just give us everything
	// it returns a cursor/pointer to all of the documents (a cursor)
	// toArray() gives us an array of objects
	// actually returns a promise object (will have a then function that takes a success/error handler)
	// if find() has a parameter, we pass in a query object
	// we can search for a specific _id... but it isn't a string. So we have to create an ObjectID
	// object. The constructor is available above in the destructuring (takes a string).

	let objIDVar = "5b53b2537db319e358cd5190";

	db.collection("Todos").find({_id: new ObjectID(objIDVar)}).toArray()
		.then((docs) => {
			console.log("Todos");
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err) => {
			console.log("Unable to fetch todos", err);
		});

	db.collection("Todos").find({_id: new ObjectID(objIDVar)}).count()
		.then((count) => {
			console.log(`Todos count: ${count}`);
		}, (err) => {
			console.log("Unable to fetch todos", err);
		});

	db.collection("Todos").find({completed: false}).toArray()
		.then((docs) => {
			console.log("Incomplete Todos");
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err) => {
			console.log("Unable to find any todos", err);
		});

	db.collection("Users").find({name: "Calvin"}).toArray()
		.then((docs) => {
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err) => {
			console.log("Error:", err);
		});

	client.close();
});
