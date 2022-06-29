const { Router } = require("express");
const {
  viewAllDepartments,
  addDepartment,
  removeDepartment,
  viewDepartmentSpend,
} = require("../../controllers/data/department");

const router = Router();

router.get("/", viewAllDepartments);
router.post("/", addDepartment);
router.delete("/:id", removeDepartment);
router.get("/spend/:id", viewDepartmentSpend);

module.exports = router;
