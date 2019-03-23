const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/review', { useMongoClient: true })
  .then(() => console.log('Connected to mongoDB'));

const todoSchema = mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: Number, required: true },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
