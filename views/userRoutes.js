const router = require('express').Router();
const userGetAllController = require('../controllers/user/userGetAllController');
const userGetAllPatientsController = require('../controllers/user/userGetAllPatientsController');
const userGetByRoleController = require('../controllers/user/userGetByRoleController');
const userMyProfileController = require('../controllers/user/userMyProfileController');
const userUpdateController = require('../controllers/user/userUpdateController');
const userUpdateProfileController = require('../controllers/user/userUpdateProfileController');
const userGetByNameController = require('../controllers/user/userGetByNameController');
const userGetByIdController = require('../controllers/user/userGetByIdController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isAdmin = require('../middleware/isAdmin');

/////////////////////////////////////////////////////////////////

router.get('/myProfile', auth, userMyProfileController.myProfile);
router.put('/updateProfile', auth, userUpdateProfileController.updateProfile);
router.get('/getAll', auth, isAdmin, userGetAllController.getAll);
router.get('/getAllPatients', auth, isDentist, userGetAllPatientsController.getAllPatients);
router.get('/getByRole/:role', auth, isAdmin, userGetByRoleController.getByRole);
router.get('/getByName/:name', auth, isAdmin, userGetByNameController.getByName);
router.get('/getById/:id', auth, userGetByIdController.getById);
router.put('/update/:id', auth, isAdmin, userUpdateController.updateUser);

/////////////////////////////////////////////////////////////////

module.exports = router;