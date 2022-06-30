const { Router } = require("express");

const departments = require("./departments");
const roles = require("./roles");
const employees = require("./employees");
const managers = require("./managers");

const router = Router();

router.use("/departments", departments);
router.use("/roles", roles);
router.use("/employees", employees);
router.use("/managers", managers);

module.exports = router;
