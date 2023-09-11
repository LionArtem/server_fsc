const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  titleDepartment: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  equipmentGroup: [new mongoose.Schema({
    listEquipment: [
      {
        titleEquipment: {
          type: String, minlength: 1, maxlength: 500, unique: true,
        },
      },
    ],
    titleGroup: {
      type: String, minlength: 3, maxlength: 30, unique: true,
    },
  })],
});

module.exports = mongoose.model('department', cardSchema);
