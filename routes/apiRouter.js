const apiRouter = require('express').Router();
const catRouter = require('./catRouter');
const ownerRouter = require('./ownerRouter');

apiRouter.use('/cats', catRouter);
apiRouter.use('/owners', ownerRouter);

module.exports = apiRouter;