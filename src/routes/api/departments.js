const { Router } = require("express");
const {
  viewAllDepartments,
  addDepartment,
  deleteDepartment,
} = require("../../controllers/data/department");

const router = Router();

router.get("/", viewAllDepartments);
router.post("/", addDepartment);
router.delete("/:id", deleteDepartment);

module.exports = router;
