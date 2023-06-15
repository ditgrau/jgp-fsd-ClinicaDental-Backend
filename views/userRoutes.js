const router = require('express').Router();
const userGetAllPatientsController = require('../controllers/user/userGetAllPatientsController');
const userGetByRoleController = require('../controllers/user/userGetByRoleController');
const userMyProfileController = require('../controllers/user/userMyProfileController');
const userUpdateController = require('../controllers/user/userUpdateController');
const userUpdatePatientController = require('../controllers/user/userUpdatePatientController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isAdmin = require('../middleware/isAdmin');

/////////////////////////////////////////////////////////////////

router.get('/myProfile', auth, userMyProfileController.myProfile);
router.put('/updateProfile', auth, userUpdatePatientController.updateProfile);
router.get('/getAllPatients', auth, isDentist, userGetAllPatientsController.getAllPatients);
router.post('/getByRole', auth, isAdmin, userGetByRoleController.getByRole);
router.put('/update/:id', auth, isAdmin, userUpdateController.updateUser);

/////////////////////////////////////////////////////////////////

module.exports = router;