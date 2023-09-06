const departmentRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getAllDepartment,
  getDepartmentId,
} = require('../controllers/department');

departmentRouter.get('/', getAllDepartment);

departmentRouter.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), getDepartmentId);

module.exports = departmentRouter;
