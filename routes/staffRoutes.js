const express = require('express');
const router = express.Router();
const controller = require('../controllers/staffController');

router.get('/', controller.getAllStaff);
router.get('/:id', controller.getStaffById);
router.post('/', controller.createStaff);
router.put('/:id', controller.updateStaff);
router.delete('/:id', controller.deleteStaff);

module.exports = router;
