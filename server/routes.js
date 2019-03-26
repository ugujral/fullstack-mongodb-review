const router = require('express').Router();

const controller = require('./controller.js');

router
  .route('/todos')
  .get(controller.get)
  .post(controller.post);

router
  .route('/todos/:_id')
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
