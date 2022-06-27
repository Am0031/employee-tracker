const { Router } = require("express");
const {
  viewAllEmployees,
  addEmployee,
  removeEmployee,
  viewEmployeesByDepartment,
  viewEmployeesByManager,
  updateEmployee,
} = require("../../controllers/data/employees");

const router = Router();

router.get("/", viewAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", removeEmployee);
router.put("/:id", updateEmployee);
router.get("/department/:id", viewEmployeesByDepartment);
router.get("/manager/:id", viewEmployeesByManager);

module.exports = router;
