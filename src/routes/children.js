const express = require('express');
const router = express.Router();

const adminControllerChildren = require('../app/controllers/AdminControllerChildren');

router.get('/', adminControllerChildren.home);

module.exports = router;
