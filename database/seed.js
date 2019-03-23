const mongoose = require('mongoose');

const Todo = require('./index.js');

const seedData = [
  {
    name: 'study for TA',
    priority: 10,
  },
  {
    name: 'play smash',
    priority: 1,
  },
  {
    name: 'go to a wedding',
    priority: 2,
  },
];

const seedFunction = () => {
  Todo.create(seedData)
    .then(() => {
      console.log('database seeded!');
      mongoose.connection.close();
    })
    .catch(error => console.error(error));
};

seedFunction();
