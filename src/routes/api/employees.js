const { Router } = require("express");
const {
  viewAllEmployees,
  addEmployee,
  deleteEmployee,
} = require("../../controllers/data/employees");

const router = Router();

router.get("/", viewAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
