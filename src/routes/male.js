const express = require('express');
const router = express.Router();

const adminControllerMale = require('../app/controllers/AdminControllerMale');

router.get('/', adminControllerMale.home);
// router.post('/create', adminControllerMale.create);


module.exports = router;
