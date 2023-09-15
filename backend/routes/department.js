const departmentRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { regularAvatar } = require('../utils/constants');

const {
  createDepartment,
  addEquipmentGroup,
  addInDepartmentEquipment,
  addIntEquipmentJob,
} = require('../controllers/department');

departmentRouter.post(
  '/',
  celebrate({
    body: Joi.object()
      .keys({
        titleDepartment: Joi.string().required().min(3).max(30),
      }).unknown(true),
  }),
  createDepartment,
);

departmentRouter.put('/:idDepartment', celebrate({
  params: Joi.object().keys({
    idDepartment: Joi.string().hex().length(24).required(),
  }),
  body: Joi.object()
    .keys({
      titleGroup: Joi.string().required().min(3).max(30),
    }).unknown(true),
}), addEquipmentGroup);

departmentRouter.put('/:idDepartment/equipment', celebrate({
  params: Joi.object().keys({
    idDepartment: Joi.string().hex().length(24).required(),
  }),
  body: Joi.object()
    .keys({
      titleEquipment: Joi.string().required().min(3).max(30),
      idGroup: Joi.string().required().min(3).max(30),
    }).unknown(true),
}), addInDepartmentEquipment);

departmentRouter.put('/equipment/:idDepartment/:idGroup/:idEquipment', celebrate({
  params: Joi.object().keys({
    idDepartment: Joi.string().hex().length(24).required(),
    idGroup: Joi.string().hex().length(24).required(),
    idEquipment: Joi.string().hex().length(24).required(),
  }),
  body: Joi.object()
    .keys({
      nameJob: Joi.string().required().min(5).max(50),
      discription: Joi.string().required().min(5).max(50),
      foto: Joi.string().pattern(regularAvatar),
      tools: Joi.string().min(5).max(500),
      spareParts: Joi.string().min(5).max(500),
      remedies: Joi.string().min(5).max(500),
      safetyPrecautions: Joi.string().min(5).max(500),
    }).unknown(true),
}), addIntEquipmentJob);

module.exports = departmentRouter;
