const router = require('express').Router();
const dentistController = require('../controllers/dentistController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');

////////////////////////////////////////////////////////

router.put('/updateDentistProfile', auth, isDentist, dentistController.updateDentistProfile);

////////////////////////////////////////////////////////

module.exports = router;