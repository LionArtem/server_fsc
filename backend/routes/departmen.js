const topicRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  createDepartmen,
} = require('../controllers/departmen');

topicRouter.post(
  '/',
  celebrate({
    body: Joi.object()
      .keys({
        titleDepartment: Joi.string().required().min(3).max(30),
      }),
    // .unknown(true),
  }),
  createDepartmen,
);

module.exports = topicRouter;
