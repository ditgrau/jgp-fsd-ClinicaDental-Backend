const router = require('express').Router();

///////////////////////////////////////////////////

const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');
const appointRoutes = require('./views/appointRoutes');

///////////////////////////////////////////////////

router.use('/role', roleRoutes);
router.use('/user', userRoutes);
router.use('/', authRoutes);
router.use('/appoint', appointRoutes);

///////////////////////////////////////////////////

module.exports = router; 