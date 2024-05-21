const express = require('express');
const router = express.Router();

const adminControllerMale = require('../app/controllers/AdminControllerMale');

router.get('/create', adminControllerMale.create);
router.post('/', adminControllerMale.home);


module.exports = router;
