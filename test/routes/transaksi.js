const express = require("express");
const router = express.Router();

const { transferUang,printMutasi } = require('./controller/controllerTransaksi');

router.post("/", transferUang);
router.use("/print", printMutasi);

module.exports = router;
