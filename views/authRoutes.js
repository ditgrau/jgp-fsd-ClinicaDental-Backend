const router = require('express').Router();
const authController = require('../controllers/authController');

///////////////////////////

// router.get('', authController.)
router.post('/login', authController.login)

///////////////////////////

module.exports = router;