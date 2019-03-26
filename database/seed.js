const mongoose = require('mongoose');

const Todo = require('./index.js');

const seedData = [
  {
    name: 'eat',
    priority: 1,
  },
  {
    name: 'code',
    priority: 8,
  },
  {
    name: 'sleep',
    priority: 10,
  }
];

const seedFunction = () => {
  Todo.create(seedData)
    .then(() => {
      console.log('database seeded');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
};

seedFunction();
