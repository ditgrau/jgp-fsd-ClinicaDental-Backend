const router = require('express').Router();
const userController = require('../controllers/userController');
///////////////////////////

router.get('/clients', userController.getAllClients)
router.post('/userRole', userController.getUSerByRole)

///////////////////////////
module.exports = router;