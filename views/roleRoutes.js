const router = require('express').Router();
const roleController = require('../controllers/roleController');
///////////////////////////
router.get('/all', roleController.getAllRoles)
router.post ('/create', roleController.createRole);
///////////////////////////
module.exports = router;