const { Router } = require("express");
const {
  viewAllDepartments,
  addDepartment,
  removeDepartment,
  viewDepartmentSpend,
  viewEmployeesByDepartment,
} = require("../../controllers/data/department");

const router = Router();

router.get("/", viewAllDepartments);
router.get("/employees/:id", viewEmployeesByDepartment);
router.post("/", addDepartment);
router.delete("/:id", removeDepartment);
router.get("/spend/:id", viewDepartmentSpend);

module.exports = router;
