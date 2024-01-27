const mongoose = require('mongoose');
// const { regularAvatar } = require('../utils/constants');

const cardSchema = new mongoose.Schema({
  titleDepartment: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  equipmentGroup: [new mongoose.Schema({
    listEquipment: [new mongoose.Schema({
      titleEquipment: {
        type: String, minlength: 1, maxlength: 500,
      },
      listJobs: [new mongoose.Schema({
        nameJob: {
          type: String,
          minlength: 5,
          maxlength: 50,
          require: true,
        },
        discription: {
          type: String,
          minlength: 5,
          maxlength: 50,
          require: true,
        },
        foto: {
          type: String,
          // validate: {
          //   validator: (v) => regularAvatar.test(v),
          // },
        },
        tools: {
          type: String, maxlength: 500,
        },
        spareParts: {
          type: String, maxlength: 500,
        },
        remedies: {
          type: String, maxlength: 500,
        },
        safetyPrecautions: {
          type: String,
          maxlength: 500,
        },
      }),
      ],
    }),
    ],
    titleGroup: {
      type: String, minlength: 3, maxlength: 30,
    },
  })],
});

module.exports = mongoose.model('department', cardSchema);
