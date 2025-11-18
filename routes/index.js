const express = require("express");
const router = express.Router();
const UserRoutes = require("./user.routes");
const ApplicationRoutes = require("./application.routes");

router.use("/user", UserRoutes);
router.use("/applications", ApplicationRoutes);
module.exports = router;
