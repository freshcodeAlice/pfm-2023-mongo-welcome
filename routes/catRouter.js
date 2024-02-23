const catRouter = require('express').Router();
const CatController = require('../controllers/Cat.controller');

catRouter.post('/', CatController.createOne);
catRouter.get('/', CatController.getAll);
catRouter.get('/:catId', CatController.getOne);
catRouter.put('/:catId', CatController.updateOne);
catRouter.delete('/:catId', CatController.deleteOne);

module.exports = catRouter;