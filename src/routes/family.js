const express = require('express');
const router = express.Router();

const adminControllerFamily = require('../app/controllers/AdminControllerFamily');

router.get('/', adminControllerFamily.home);

module.exports = router;
