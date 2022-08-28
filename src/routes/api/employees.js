const { Router } = require("express");
const {
  viewAllEmployees,
  addEmployee,
  removeEmployee,
  updateEmployee,
} = require("../../controllers/data/employees");

const router = Router();

router.get("/", viewAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", removeEmployee);
router.put("/:id", updateEmployee);

module.exports = router;
