const router = require('express').Router();
const appointmentDentistController = require('../controllers/appointmentDentistController');
const appointmentUserController = require('../controllers/appointmentUserController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isUser = require('../middleware/isUser');

////////////////////////////////////////////////////////

router.post('/create', auth, isUser, appointmentUserController.newAppoint);
router.get('/myAppointments', auth, isUser, appointmentUserController.myAppointments);
router.put('/update/:id', auth, isUser, appointmentUserController.updateAppointment);
router.delete('/delete/:id', auth, isUser, appointmentUserController.deleteAppointment);

////////////////////////////////////////////////////////

router.get('/myApptDentist', auth, isDentist, appointmentDentistController.myApptDentist);
router.get('/getAllAppt', auth, isDentist, appointmentDentistController.getAllAppt);
router.get('/apptById', auth, isDentist, appointmentDentistController.apptById);

////////////////////////////////////////////////////////

module.exports = router;