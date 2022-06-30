const { Router } = require("express");

//route to functions for front end - functions to be developed in the next update
const {
  renderStartPage,
  renderReportPage,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderStartPage);
router.get("/report", renderReportPage);

module.exports = router;
