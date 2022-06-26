const { Router } = require("express");
const {
  viewAllEmployees,
  addEmployee,
  deleteEmployee,
  viewAEmployeesByDepartment,
} = require("../../controllers/data/employees");

const router = Router();

router.get("/", viewAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);
router.get("/:depId", viewAEmployeesByDepartment);

module.exports = router;
