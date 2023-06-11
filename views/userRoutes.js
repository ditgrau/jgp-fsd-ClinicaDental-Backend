const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/verifyToken');
const noUser = require('../middleware/noUser');

/////////////////////////////////////////////////////////////////

router.get('/clients', auth, noUser, userController.getAllClients);
router.get('/myProfile', auth, userController.myProfile);
router.post('/userRole', auth, userController.getUSerByRole);
router.put('/update', auth, userController.updateProfile);

/////////////////////////////////////////////////////////////////

module.exports = router;