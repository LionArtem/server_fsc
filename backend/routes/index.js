const router = require('express').Router();
const departmenRouter = require('./departmen');

router.use('/departmen', departmenRouter);

module.exports = router;
