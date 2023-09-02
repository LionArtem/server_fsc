const Departmen = require('../models/departmen');

const IncorrectErr = require('../errors/incorrect-err');
// const NotFoundError = require('../errors/not-found-err');

const createDepartmen = (req, res, next) => {
  // const id = req.user._id;
  const { titleDepartment } = req.body;
  Departmen.create({
    titleDepartment,
    // owner: id,
  })
    .then((newDepartmen) => {
      res.status(201).send(newDepartmen);
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
  createDepartmen,
};
