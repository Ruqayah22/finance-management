const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  debt: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("employees", employeesSchema);
