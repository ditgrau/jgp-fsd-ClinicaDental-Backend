const router = require('express').Router();
const roleController = require('../controllers/roleController');
const isAdmin = require('../middleware/isAdmin');

///////////////////////////

router.get('/all', isAdmin, roleController.getAllRoles)
router.post ('/create', isAdmin, roleController.createRole);

///////////////////////////

module.exports = router;