const router = require('express').Router();
const authLoginController = require('../controllers/auth/authLoginController');
const authSignupController = require('../controllers/auth/authSignupController');

////////////////////////////////////////////////////////

router.post('/login', authLoginController.login)
router.post('/signup', authSignupController.signup)

///////////////////////////////////////////////////////

module.exports = router;