const express = require("express");
const router = express.Router();

const {
  getAllFiltered,
  getAllFilteredStatic,
} = require("../controllers/products");

router.route("/").get(getAllFiltered);
router.route("/static").get(getAllFilteredStatic);

module.exports = router;
