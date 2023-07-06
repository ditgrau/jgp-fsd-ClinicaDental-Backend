const router = require('express').Router();
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isUser = require('../middleware/isUser');

////////////////////////////////////////////////////////

const appointmentByIdController = require('../controllers/appointment/appointmentByIdController');
const appointmentDeleteController = require('../controllers/appointment/appointmentDeleteController');
const appointmentDentistController = require('../controllers/appointment/appointmentDentistController');
const appointmentGetAllController = require('../controllers/appointment/appointmentGetAllController');
const appointmentGetMineController = require('../controllers/appointment/appointmentGetMineController');
const appointmentNewController = require('../controllers/appointment/appointmentNewController');
const appointmentUpdateController = require('../controllers/appointment/appointmentUpdateController');


////////////////////////////////////////////////////////

router.get('/appointmentsDentist', auth, isDentist, appointmentDentistController.appointmentsDentist);
router.get('/getAll', auth, appointmentGetAllController.getAllAppointments);
router.get('/appointmentById', auth, isDentist, appointmentByIdController.appointmentById);
router.get('/myAppointments', auth, isUser, appointmentGetMineController.myAppointments);
router.post('/new', auth, isUser, appointmentNewController.newAppointment);
router.put('/update/:id', auth, isUser, appointmentUpdateController.updateAppointment);
router.delete('/delete/:id', auth, appointmentDeleteController.deleteAppointment);

////////////////////////////////////////////////////////

module.exports = router;