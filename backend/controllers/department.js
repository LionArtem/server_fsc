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

const getAllDepartment = (req, res, next) => {
  Department.find()
    .then((department) => {
      const newDepartment = department.map((data) => ({
        _id: data._id, titleDepartment: data.titleDepartment,
      }));
      res.send(newDepartment);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createDepartment,
  getAllDepartment,
};
