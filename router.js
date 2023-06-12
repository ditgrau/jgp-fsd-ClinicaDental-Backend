const router = require('express').Router();

///////////////////////////////////////////////////

const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');
const appointRoutes = require('./views/appointRoutes');
const treatmentRoutes = require('./views/treatmentRoutes');

///////////////////////////////////////////////////

router.use('/role', roleRoutes);
router.use('/user', userRoutes);
router.use('/', authRoutes);
router.use('/appoint', appointRoutes);
router.use('/treat', treatmentRoutes);

///////////////////////////////////////////////////

module.exports = router; 