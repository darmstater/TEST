const express = require('express');
const router = express.Router();
const { getKaryawanPerusahaan } = require('../routes/controller/controllerSoal5');

router.get('/', getKaryawanPerusahaan);

module.exports = router;
