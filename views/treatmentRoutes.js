const router = require('express').Router();
const treatmentController = require('../controllers/treatmentController');
const isUser = require('../middleware/isUser');
const auth = require('../middleware/verifyToken');

////////////////////////////////////////////////////////

router.post('/dentistByTreatment', auth, isUser, treatmentController.dentistByTreatment)
router.get('/allTreatments', auth, treatmentController.allTreatments)

///////////////////////////////////////////////////////

module.exports = router;