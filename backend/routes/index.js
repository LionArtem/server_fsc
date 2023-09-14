const router = require('express').Router();
const departmentRouter = require('./department');
const usersRouter = require('./users');

router.use('/department', departmentRouter);
router.use('/users', usersRouter);

module.exports = router;
