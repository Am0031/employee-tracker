const { Router } = require("express");

const { renderHtml } = require("../../controllers/views");

const router = Router();

router.get("/", renderHtml);

module.exports = router;
