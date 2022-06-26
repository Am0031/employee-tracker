const { Router } = require("express");
const {
  viewAllEmployees,
  addEmployee,
  deleteEmployee,
  viewAEmployeesByDepartment,
  viewEmployeesByManager,
} = require("../../controllers/data/employees");

const router = Router();

router.get("/", viewAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);
router.get("/department/:depId", viewAEmployeesByDepartment);
router.get("/manager/:managerId", viewEmployeesByManager);

module.exports = router;
