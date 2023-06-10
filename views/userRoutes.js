const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/verifyToken');

///////////////////////////

router.get('/clients', auth, userController.getAllClients);
router.post('/userRole', auth, userController.getUSerByRole);

///////////////////////////

module.exports = router;