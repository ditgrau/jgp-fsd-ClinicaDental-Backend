const router = require('express').Router();
const dentistUpdateController = require('../controllers/dentist/dentistUpdateController');
const userGetAllDentistController = require('../controllers/dentist/userGetAllDentistController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');

////////////////////////////////////////////////////////

router.put('/updateDentistProfile', auth, isDentist, dentistUpdateController.updateDentistProfile);
router.get('/getAllDentist', auth, userGetAllDentistController.getAllDentist);

////////////////////////////////////////////////////////

module.exports = router;