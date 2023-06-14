const router = require('express').Router();
const treatmentDentistController = require('../controllers/treatmentDentistController');
const treatmentGetAllController = require('../controllers/treatmentGetAllController');
const isUser = require('../middleware/isUser');
const auth = require('../middleware/verifyToken');

////////////////////////////////////////////////////////

router.post('/dentistByTreatment', auth, isUser, treatmentDentistController.dentistByTreatment)
router.get('/getAll', auth, treatmentGetAllController.getAllTreatments)

///////////////////////////////////////////////////////

module.exports = router;