const expect = require("expect");
const request = require("supertest");

// .. to go back one directory
const {app} = require("./../server");
const {Todo} = require("./../models/todo");

const todos = [{
    text: "first test todo"
}, {
    text: "second test todo"
}];

// we are assuming the database to be empty. This might not be the case
// beforeEach will run before each test case
beforeEach((done) => {
    // .remove is a mongodb native function
    // this will wipe the database
    Todo.remove({}).then(() => {
        // insertMany will take an array and insert all elements as documents
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe("POST /todos", () => {
    it("should create a new todo", (done) => {
        var text = "Test todo text";

        request(app)
            .post("/todos")
            // send will convert the object to JSON
            .send({text})
            // expect library
            .expect(200)
            // from supertest library
            .expect((res) => {
                // expect library
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    // return to stop function execution
                    return done(err);
                }
                // .find() is a mongodb native function
                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((err) => done(err));
            });
    });

    it("should not create todo with invalid body data", (done) => {
        request(app)
            .post("/todos")
            .send({})
            .expect(400)
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err) => done(err));
            });
    });
});

describe("GET /todos", () => {
    it("should get all todos", (done) => {
        request(app)
            .get("/todos")
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});
