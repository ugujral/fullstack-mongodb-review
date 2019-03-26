const Todo = require('../database/index.js');

const controller = {
  get: (req,res) => {
    Todo.find({})
      .sort({ priority: -1 })
      .then((docs) => {
        res.status(200).send(docs)
      })
      .catch(err => console.error(err));
  },
  post: (req,res) => {
    Todo.create(req.body)
      .then(() => {
        res.status(201).send('posted todo')
      })
      .catch(err => console.error(err));
  },
  update: (req,res) => {
    const _id = req.params;
    Todo.findByIdAndUpdate(_id, req.body)
    .then(() => {
      res.status(203).send('updated todo')
    })
    .catch(err => console.error(err));
  },
  delete: (req,res) => {
    const _id = req.params;
    Todo.deleteOne(_id)
    .then(() => {
      res.status(202).send('deleted todo')
    })
    .catch(err => console.error(err));
  }
};

module.exports = controller;