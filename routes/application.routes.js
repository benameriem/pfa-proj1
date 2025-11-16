const express = require("express");
const {
  getApplications,
  addApplication,
  updateApplication,
  deleteApplication,
} = require("../controller/application.controller");
// Setup router
const router = express.Router();
router.get("/", getApplications);
router.post("/", addApplication);
router.patch("/:id", updateApplication);
router.delete("/:id", deleteApplication);

module.exports = router;
