const departmentRouter = require('express').Router();
// const { celebrate, Joi } = require('celebrate');

const {
  getAllDepartment,
} = require('../controllers/department');

departmentRouter.get('/', getAllDepartment);

module.exports = departmentRouter;
