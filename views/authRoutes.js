const router = require('express').Router();
const authLoginController = require('../controllers/authLoginController');
const authSignupController = require('../controllers/authSignupController');

////////////////////////////////////////////////////////

router.post('/login', authLoginController.login)
router.post('/signup', authSignupController.signup)

///////////////////////////////////////////////////////

module.exports = router;