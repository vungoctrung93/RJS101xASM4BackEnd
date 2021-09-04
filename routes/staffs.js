const express = require('express');

const staffController = require('../controllers/staffConstroller');

const router = express.Router();

router.get('/', staffController.getStaffs);
router.post('/', staffController.addStaff);
router.patch('/', staffController.updateStaff);
router.delete('/:id', staffController.removeStaff);

module.exports = router;