const ownerRouter = require('express').Router();
const OwnerController = require('../controllers/Owner.controller');

ownerRouter.post('/', OwnerController.createOne);
ownerRouter.get('/', OwnerController.getAll);
ownerRouter.get('/:ownerId', OwnerController.getOne);
ownerRouter.put('/:ownerId', OwnerController.updateOne);
ownerRouter.delete('/:ownerId',OwnerController.deleteOne);

ownerRouter.patch('/:ownerId/:catId', OwnerController.addCatToOwner);

module.exports = ownerRouter;