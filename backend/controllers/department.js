const Department = require('../models/department');

const IncorrectErr = require('../errors/incorrect-err');
// const NotFoundError = require('../errors/not-found-err');

const createDepartment = (req, res, next) => {
  const { titleDepartment } = req.body;
  Department.create({
    titleDepartment,
  })
    .then((newDepartment) => {
      res.status(201).send(newDepartment);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new IncorrectErr('Не корректные данные');
      } else {
        next(err);
      }
    });
};

const getDepartment = (req, res, next) => {
  Department.find()
    .then((topic) => {
      res.send(topic);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createDepartment,
  getDepartment,
};
