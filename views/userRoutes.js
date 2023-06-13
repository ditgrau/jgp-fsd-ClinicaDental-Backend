const router = require('express').Router();
const companyUserController = require('../controllers/companyUserController');
const clientUserController = require('../controllers/clientUserController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isAdmin = require('../middleware/isAdmin');

/////////////////////////////////////////////////////////////////

router.get('/myProfile', auth, clientUserController.myProfile);
router.put('/updateProfile', auth, clientUserController.updateProfile);

/////////////////////////////////////////////////////////////////

router.get('/clients', auth, isDentist, companyUserController.getAllClients);
router.post('/userRole', auth, isAdmin, companyUserController.getUSerByRole);

/////////////////////////////////////////////////////////////////

module.exports = router;