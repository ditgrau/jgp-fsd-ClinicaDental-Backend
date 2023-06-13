const router = require('express').Router();

///////////////////////////////////////////////////

const authRoutes = require('./views/authRoutes');
const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');
const dentistRoutes = require('./views/dentistRoutes');
const appointRoutes = require('./views/appointRoutes');
const treatmentRoutes = require('./views/treatmentRoutes');

///////////////////////////////////////////////////

router.use('/', authRoutes);
router.use('/role', roleRoutes);
router.use('/user', userRoutes);
router.use('/dentist', dentistRoutes);
router.use('/appoint', appointRoutes);
router.use('/treat', treatmentRoutes);

///////////////////////////////////////////////////

module.exports = router; 