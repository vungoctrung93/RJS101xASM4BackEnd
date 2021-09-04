const express = require('express');

const departmentController = require('../controllers/departmentController');

const router = express.Router();

router.get('/', departmentController.getDepartments);
router.get('/:id', departmentController.getStaffs);

module.exports = router;