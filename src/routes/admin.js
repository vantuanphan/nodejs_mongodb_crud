const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.use('/create', adminController.create);
router.use('/show', adminController.show);
router.use('/trash', adminController.trash);

router.use('/', adminController.home);

module.exports = router;
