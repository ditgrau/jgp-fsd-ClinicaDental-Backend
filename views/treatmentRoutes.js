const router = require('express').Router();
const treatmentController = require('../controllers/treatmentController');

////////////////////////////////////////////////////////

router.post('/chooseDentist', treatmentController.dentistByTreatment)

///////////////////////////////////////////////////////

module.exports = router;