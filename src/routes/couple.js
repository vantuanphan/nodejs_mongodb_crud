const express = require('express');
const router = express.Router();

const adminControllerCouple = require('../app/controllers/AdminControllerCouple');

router.get('/', adminControllerCouple.home);

module.exports = router;
