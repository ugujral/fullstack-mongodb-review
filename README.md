# Fullstack-MongoDB
Fullstack review with mongodb

### Exercise 1

* npm install
* Add middleware to your express server
* Add a router and a controller to handle get/post to /todos and delete/put to /todos/:_id

### Exercise 2

* Create a connection to your mongoDB
* Create a schema with a name(string) and a priority(number)
* Create a Model using the schema and export it

### Exercise 3

* Create a seed function that creates some todos 
* Add a script to your package.json to populate your database

### Exercise 4

* Connect your database to your controller and add functionality using callbacks
* getAll should send all todos in database sorted by priority
* addTodo should add to your database using req.body
* deleteTodo should delete from database if _id matches
* updateTodo should update todo at _id using req.body
* Test with postman

### Exercise 5

* npm run build
* Create a todo list with react
* Do not use your database for now.  Use dummy data instead.
* Create input fields for name and priority that will add to todoList on submit

### Exercise 6

* Refactor your client to get/post from your database

### Exercise 7

* Refactor your client to delete todos from your database

### Exercise 8

* Refactor your client to increase or decrease priority of todos