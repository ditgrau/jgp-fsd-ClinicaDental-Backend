const router = require('express').Router();
const roleCreateController = require('../controllers/roleCreateController');
const roleGetAllController = require('../controllers/roleGetAllController');
const auth = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

//////////////////////////////////////////////////////

router.get('/all', auth, isAdmin, roleGetAllController.getAllRoles)
router.post ('/create', auth, isAdmin, roleCreateController.createRole);

//////////////////////////////////////////////////////

module.exports = router;