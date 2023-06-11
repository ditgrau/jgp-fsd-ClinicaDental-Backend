const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/verifyToken');

////////////////////////////////////////////////////////

router.post('/create', auth, appointmentController.newAppoint);
router.get('/myAppointments', auth, appointmentController.myAppointments);

////////////////////////////////////////////////////////

module.exports = router;