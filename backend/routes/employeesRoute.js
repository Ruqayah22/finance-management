const express = require("express");
const {
  getEmployees,
  addEmployees,
  getEmployeeById,
  editEmployee,
  deleteEmployee,
} = require("../controller/employeesController.js");

const router = express.Router();

router.get("/employee", getEmployees);
router.post("/employee/add", addEmployees);
router.get("/employee/:id", getEmployeeById);
router.put("/employee/:id", editEmployee);
router.delete("/employee/:id", deleteEmployee);

module.exports = router;
