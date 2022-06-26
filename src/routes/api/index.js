const { Router } = require("express");

const departments = require("./departments");
const roles = require("./roles");

const router = Router();

router.use("/departments", departments);
router.use("/roles", roles);

module.exports = router;
