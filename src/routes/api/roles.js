const { Router } = require("express");
const {
  viewAllRoles,
  addRole,
  deleteRole,
} = require("../../controllers/data/roles");

const router = Router();

router.get("/", viewAllRoles);
router.post("/", addRole);
router.delete("/:id", deleteRole);

module.exports = router;
