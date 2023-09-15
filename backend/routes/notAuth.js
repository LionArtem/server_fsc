const departmentRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getAllDepartment,
  getDepartmentId,
  // getEquipmentGroupId,
  getEquipmentId,
} = require('../controllers/department');

departmentRouter.get('/department', getAllDepartment);

departmentRouter.get('/department/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
}), getDepartmentId);

departmentRouter.get('/equipment/:idDepartment/:idGroup/:idEquipment', celebrate({
  params: Joi.object().keys({
    idDepartment: Joi.string().hex().length(24).required(),
    idGroup: Joi.string().hex().length(24).required(),
    idEquipment: Joi.string().hex().length(24).required(),
  }),
}), getEquipmentId);

module.exports = departmentRouter;
