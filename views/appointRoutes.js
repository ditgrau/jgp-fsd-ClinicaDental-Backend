const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');

////////////////////////////////////////////////////////

router.post('/create', auth, appointmentController.newAppoint);
router.get('/myAppointments', auth, appointmentController.myAppointments);
router.get('/myApptDentist', auth, isDentist, appointmentController.myApptDentist);
router.get('/getAllAppt', auth, isDentist, appointmentController.getAllAppt);
router.get('/apptById', auth, isDentist, appointmentController.apptById);

////////////////////////////////////////////////////////

module.exports = router;