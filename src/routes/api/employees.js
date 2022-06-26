const { Router } = require("express");
const {
  viewAllEmployees,
  addEmployee,
  removeEmployee,
  viewAEmployeesByDepartment,
  viewEmployeesByManager,
  updateEmployee,
} = require("../../controllers/data/employees");

const router = Router();

router.get("/", viewAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", removeEmployee);
router.put("/:id", updateEmployee);
router.get("/department/:depId", viewAEmployeesByDepartment);
router.get("/manager/:managerId", viewEmployeesByManager);

module.exports = router;
