const router = require('express').Router();
const dentistUpdateController = require('../controllers/dentistUpdateController');
const auth = require('../middleware/verifyToken');
const isDentist = require('../middleware/isDentist');

////////////////////////////////////////////////////////

router.put('/updateDentistProfile', auth, isDentist, dentistUpdateController.updateDentistProfile);

////////////////////////////////////////////////////////

module.exports = router;