const express = require("express");
const router = express.Router();

const { getColleges } = require("../controllers/collegeController");
const {isLoggedIn}= require("../middlewares/userMiddleware")

router.route("/colleges").get(isLoggedIn,getColleges);

module.exports = router;
