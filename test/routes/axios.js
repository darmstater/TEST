const express = require('express');
const router = express.Router();

const { getAll } = require('./controller/controllerAxios');

router.use('/', getAll);

module.exports = router;