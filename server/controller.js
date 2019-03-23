const Todo = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Todo.find({})
      .sort({ priority: -1 })
      .exec((err, docs) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(docs);
        }
      });
    // res.send('hello from get');
  },
  post: (req, res) => {
    const newTodo = req.body;
    Todo.create(newTodo, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send('added a todo');
      }
    });
    // res.send('hello from post');
  },
  delete: (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    Todo.deleteOne({ _id }, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.status(202).send('deleted a todo');
      }
    });
    // res.send('hello from delete');
  },
  put: (req, res) => {
    const newTodo = req.body;
    const { _id } = req.params;
    Todo.findByIdAndUpdate(_id, newTodo, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('updated a todo');
      }
    });
    // res.send('hello from put');
  },
};

module.exports = controller;
