const Department = require('../models/department');

const IncorrectErr = require('../errors/incorrect-err');
const NotFoundError = require('../errors/not-found-err');

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

const getDepartmentId = (req, res, next) => {
  const { id } = req.params;
  Department.findById(id)
    .then((department) => {
      if (department) {
        res.send(department);
        return;
      }
      throw new NotFoundError('отделение не найден');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        const error = new IncorrectErr('Некорректный id');
        next(error);
      } else {
        next(err);
      }
    });
};

const getEquipmentGroupId = (req, res, next) => {
  const { id } = req.params;
  Department.findById(id)
    .then((department) => {
      if (department) {
        res.send(department);
        return;
      }
      throw new NotFoundError('отделение не найден');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        const error = new IncorrectErr('Некорректный id');
        next(error);
      } else {
        next(err);
      }
    });
};

const addEquipmentGroup = (req, res, next) => {
  const { idDepartment } = req.params;
  const {
    titleGroup,
  } = req.body;

  Department.findById(
    idDepartment,
  )
    .then((resDepartment) => {
      if (resDepartment) {
        resDepartment.equipmentGroup.push({ titleGroup });
        resDepartment.save();
        res.send(resDepartment.equipmentGroup);
        return;
      }
      throw new NotFoundError('отделение с таким id не найдена');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        const error = new IncorrectErr('не корректные данные');
        next(error);
      } else {
        next(err);
      }
    });
};

const addInDepartmentEquipment = (req, res, next) => {
  const { idDepartment } = req.params;
  const {
    titleEquipment,
    idGroup,
  } = req.body;

  Department.findById(
    idDepartment,
  )
    .then((resDepartment) => {
      if (resDepartment) {
        if (resDepartment.equipmentGroup.id(idGroup)) {
          const group = resDepartment.equipmentGroup.id(idGroup);
          group.listEquipment.push({ titleEquipment });
          resDepartment.save().then(() => {
            res.send(group.listEquipment);
          });
        } else {
          throw new NotFoundError('группа отделения с таким id не найдена');
        }
      } else {
        throw new NotFoundError('отделение с таким id не найдена');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        const error = new IncorrectErr('не корректные данные');
        next(error);
      } else {
        next(err);
      }
    });
};

module.exports = {
  createDepartment,
  getAllDepartment,
  getDepartmentId,
  addEquipmentGroup,
  addInDepartmentEquipment,
  getEquipmentGroupId,
};
