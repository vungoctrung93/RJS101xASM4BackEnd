const express = require('express');

const staffsSalaryController = require('../controllers/staffsSalaryController');

const router = express.Router();

router.get('/', staffsSalaryController.getStaffsSalary);

module.exports = router;