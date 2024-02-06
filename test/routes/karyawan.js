const express = require("express");
const router = express.Router();

const { createKaryawan,getKaryawan,updateKaryawan,deleteKaryawan } = require('./controller/controllerKaryawan');

router.post("/create", createKaryawan);
router.use("/read", getKaryawan);
router.put("/update/:id", updateKaryawan);
router.delete("/delete/:id", deleteKaryawan);

module.exports = router;