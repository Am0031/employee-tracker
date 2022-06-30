const { Router } = require("express");
const {
  getManagers,
  viewEmployeesByManager,
} = require("../../controllers/data/managers");

const router = Router();

router.get("/", getManagers);
router.get("/:id", viewEmployeesByManager);

module.exports = router;
