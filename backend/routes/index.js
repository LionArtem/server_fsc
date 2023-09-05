const router = require('express').Router();
const departmentRouter = require('./department');
const usersRouter = require('./users');

router.use('/departmen', departmentRouter);
router.use('/users', usersRouter);

module.exports = router;
