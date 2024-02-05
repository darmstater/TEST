const express = require("express");
const router = express.Router();

const { createKaryawan,getKaryawan,updateKaryawan,deleteKaryawan } = require('./controller/controllerKaryawan');

router.post("/create", createKaryawan);
router.use("/read", getKaryawan);
router.post("/update", updateKaryawan);
router.post("/delete", deleteKaryawan);

module.exports = router;