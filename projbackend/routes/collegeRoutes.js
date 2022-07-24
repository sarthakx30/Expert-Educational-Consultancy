const express = require("express");
const router = express.Router();

const { getColleges } = require("../controllers/collegeController");

router.route("/colleges").get(getColleges);

module.exports = router;
