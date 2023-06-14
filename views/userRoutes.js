const router = require('express').Router();
const userGetAllPatientsController = require('../controllers/userGetAllPatientsController');
const userGetByRoleController = require('../controllers/userGetByRoleController');
const userMyProfileController = require('../controllers/userMyProfileController');
const userUpdateController = require('../controllers/userUpdateController');
const userUpdatePatientController = require('../controllers/userUpdatePatientController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isAdmin = require('../middleware/isAdmin');

/////////////////////////////////////////////////////////////////

router.get('/myProfile', auth, userMyProfileController.myProfile);
router.put('/updateProfile', auth, userUpdatePatientController.updateProfile);
router.get('/getAllPatients', auth, isDentist, userGetAllPatientsController.getAllPatients);
router.post('/getByRole', auth, isAdmin, userGetByRoleController.getByRole);
router.put('/update', auth, isAdmin, userUpdateController.updateUser);

/////////////////////////////////////////////////////////////////

module.exports = router;