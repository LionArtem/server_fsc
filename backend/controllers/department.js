const Department = require('../models/department');

const IncorrectErr = require('../errors/incorrect-err');
// const NotFoundError = require('../errors/not-found-err');

const createDepartment = (req, res, next) => {
  // const id = req.user._id;
  const { titleDepartment } = req.body;
  Department.create({
    titleDepartment,
    // owner: id,
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

module.exports = {
  createDepartment,
};
