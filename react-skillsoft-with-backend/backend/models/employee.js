const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empName: { type: String, required: true },
  empPass: { type: String, required: true },
  employeeWeights: [
    {
      empWeight: Number,
      date: { type: Date, default: Date.now },
    },
  ],
}, { collection: 'Employee' });

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;