const departmentRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  createDepartment,
  getAllDepartment,
  getDepartmentId,
  addInDepartmentGroup,
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

departmentRouter.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), getDepartmentId);

departmentRouter.put('/:idDepartment', celebrate({
  params: Joi.object().keys({
    idDepartment: Joi.string().hex().length(24).required(),
  }),
  body: Joi.object()
    .keys({
      titleGroup: Joi.string().required().min(3).max(30),
    }),
}), addInDepartmentGroup);

module.exports = departmentRouter;
