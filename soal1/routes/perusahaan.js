const express = require("express");
const router = express.Router();

const{ getAll } = require("./controller/controllerPerusahaan");

router.use("/", getAll);

module.exports = router;