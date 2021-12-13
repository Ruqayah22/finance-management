const Employees = require("../models/employeesModel");

const getEmployees = async (request, response) => {
  try {
    const employees = await User.find();
    response.status(200).json(employees);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const addEmployees = async (request, response) => {
  const employee = request.body;
  console.log("inside");

  const newEmployees = new Employees(employee);
  try {
    await newEmployees.save();
    response.status(201).json(newEmployees);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const getEmployeeById = async (request, response) => {
  try {
    const employees = await Employees.findById(request.params.id);
    response.status(200).json(employees);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const editEmployee = async (request, response) => {
  let employee = await Employees.findById(request.params.id);
  employee = request.body;

  const editEmployee = new Employees(employee);
  try {
    await Employees.updateOne({ _id: request.params.id }, editEmployee);
    response.status(201).json(editEmployee);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const deleteEmployee = async (request, response) => {
  try {
    await Employees.deleteOne({ _id: request.params.id });
    response.status(201).json("Employee deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = {
  getEmployees,
  addEmployees,
  getEmployeeById,
  editEmployee,
  deleteEmployee,
};
