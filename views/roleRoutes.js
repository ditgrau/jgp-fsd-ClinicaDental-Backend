const router = require('express').Router();
const roleController = require('../controllers/roleController');

router.get('/role', roleController.getAllRoles)
router.post ('/role', roleController.createRole);

module.exports = router;