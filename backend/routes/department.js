const departmentRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  createDepartment,
  getAllDepartment,
} = require('../controllers/department');

departmentRouter.post(
  '/',
  celebrate({
    body: Joi.object()
      .keys({
        titleDepartment: Joi.string().required().min(3).max(30),
      }),
    // .unknown(true),
  }),
  createDepartment,
);

departmentRouter.get('/', getAllDepartment);

module.exports = departmentRouter;
