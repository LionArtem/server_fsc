const router = require('express').Router();
const departmentRouter = require('./department');

router.use('/departmen', departmentRouter);

module.exports = router;
