const mongoose = require('mongoose');
const { regularAvatar } = require('../utils/constants');

const cardSchema = new mongoose.Schema({
  titleDepartment: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  equipmentGroup: [new mongoose.Schema({
    listEquipment: [new mongoose.Schema({
      titleEquipment: {
        type: String, minlength: 1, maxlength: 500, unique: true,
      },
      listJobs: [new mongoose.Schema({
        nameJob: {
          type: String,
          minlength: 5,
          maxlength: 50,
          unique: true,
          require: true,
        },
        discription: {
          type: String,
          minlength: 5,
          maxlength: 50,
          unique: true,
          require: true,
        },
        foto: {
          type: String,
          validate: {
            validator: (v) => regularAvatar.test(v),
          },
        },
        tools: {
          type: String, minlength: 5, maxlength: 500,
        },
        spareParts: {
          type: String, minlength: 5, maxlength: 500,
        },
        remedies: {
          type: String, minlength: 5, maxlength: 500,
        },
        safetyPrecautions: {
          type: String, minlength: 5, maxlength: 500,
        },
      }),
      ],
    }),
    ],
    titleGroup: {
      type: String, minlength: 3, maxlength: 30, unique: true,
    },
  })],
});

module.exports = mongoose.model('department', cardSchema);
