const { Router } = require("express");

const departments = require("./departments");

const router = Router();

router.use("/departments", departments);

module.exports = router;
