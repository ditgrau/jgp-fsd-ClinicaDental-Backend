const router = require('express').Router();
const apptDentistController = require('../controllers/apptDentistController');
const apptUserController = require('../controllers/apptUserController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isUser = require('../middleware/isUser');

////////////////////////////////////////////////////////

router.post('/create', auth, apptUserController.newAppoint);
router.get('/myAppointments', auth, isUser, apptUserController.myAppointments);

////////////////////////////////////////////////////////

router.get('/myApptDentist', auth, isDentist, apptDentistController.myApptDentist);
router.get('/getAllAppt', auth, isDentist, apptDentistController.getAllAppt);
router.get('/apptById', auth, isDentist, apptDentistController.apptById);

////////////////////////////////////////////////////////

module.exports = router;