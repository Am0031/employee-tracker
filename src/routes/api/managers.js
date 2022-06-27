const { Router } = require("express");
const { getManagers } = require("../../controllers/data/managers");

const router = Router();

router.get("/", getManagers);

module.exports = router;
