const express = require('express');
const router = express.Router();

const adminControllerFemale = require('../app/controllers/AdminControllerFemale');

router.get('/', adminControllerFemale.home);

module.exports = router;
