const router = require('express').Router();
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');
const isUser = require('../middleware/isUser');

////////////////////////////////////////////////////////

const appointmentByIdController = require('../controllers/appointmentByIdController');
const appointmentDeleteController = require('../controllers/appointmentDeleteController');
const appointmentDentistController = require('../controllers/appointmentDentistController');
const appointmentGetAllController = require('../controllers/appointmentGetAllController');
const appointmentGetMineController = require('../controllers/appointmentGetMineController');
const appointmentNewController = require('../controllers/appointmentNewController');
const appointmentUpdateController = require('../controllers/appointmentUpdateController');


////////////////////////////////////////////////////////

router.get('/appointmentsDentist', auth, isDentist, appointmentDentistController.appointmentsDentist);
router.get('/getAll', auth, isDentist, appointmentGetAllController.getAllAppointments);
router.get('/appointmentById', auth, isDentist, appointmentByIdController.appointmentById);
router.get('/myAppointments', auth, isUser, appointmentGetMineController.myAppointments);
router.post('/new', auth, isUser, appointmentNewController.newAppointment);
router.put('/update/:id', auth, isUser, appointmentUpdateController.updateAppointment);
router.delete('/delete/:id', auth, isUser, appointmentDeleteController.deleteAppointment);

////////////////////////////////////////////////////////

module.exports = router;