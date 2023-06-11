const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/verifyToken');

////////////////////////////////////////////////////////

router.post('/create', auth, appointmentController.newAppoint);

////////////////////////////////////////////////////////

module.exports = router;