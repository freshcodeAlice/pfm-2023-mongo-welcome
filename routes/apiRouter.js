const apiRouter = require('express').Router();
const catRouter = require('./catRouter');

apiRouter.use('/cats', catRouter);


module.exports = apiRouter;