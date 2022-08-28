const { Router } = require("express");
const {
  viewAllRoles,
  addRole,
  removeRole,
} = require("../../controllers/data/roles");

const router = Router();

router.get("/", viewAllRoles);
router.post("/", addRole);
router.delete("/:id", removeRole);

module.exports = router;
