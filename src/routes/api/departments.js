const { Router } = require("express");
const {
  viewAllDepartments,
  addDepartment,
  removeDepartment,
} = require("../../controllers/data/department");

const router = Router();

router.get("/", viewAllDepartments);
router.post("/", addDepartment);
router.delete("/:id", removeDepartment);

module.exports = router;
