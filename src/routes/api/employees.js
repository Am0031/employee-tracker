const { Router } = require("express");
const {
  viewAllEmployees,
  addEmployee,
  removeEmployee,
  viewEmployeesByDepartment,
  updateEmployee,
} = require("../../controllers/data/employees");

const router = Router();

router.get("/", viewAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", removeEmployee);
router.put("/:id", updateEmployee);
router.get("/department/:id", viewEmployeesByDepartment);

module.exports = router;
