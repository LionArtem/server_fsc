const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  titleDepartment: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },

  equipmentGroup: [
    {
      listEquipment: [
        {
          titleEquipment: { type: String, minlength: 1, maxlength: 500 },
        },
      ],
      titleGroup: { type: String, minlength: 3, maxlength: 30 },
    },
  ],
});

module.exports = mongoose.model('departmen', cardSchema);
