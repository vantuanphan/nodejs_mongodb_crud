const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/', adminController.home);

module.exports = router;
