const express = require("express");
// Setup router
const router = express.Router();
router.post("/signup", signup);