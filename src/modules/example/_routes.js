const express = require("express");
const { getHello } = require("./_controller");

const router = express.Router();

router.get("/", getHello);

module.exports = router;
