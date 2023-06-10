const router = require('express').Router();
const roleController = require('../controllers/roleController');
const auth = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

///////////////////////////

router.get('/all', auth, isAdmin, roleController.getAllRoles)
router.post ('/create', auth, isAdmin, roleController.createRole);

///////////////////////////

module.exports = router;