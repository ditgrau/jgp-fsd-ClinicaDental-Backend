const router = require('express').Router();

////////////////////////

const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');

////////////////////////

router.use('/', roleRoutes);
router.use('/', userRoutes);
router.use('/', authRoutes);

////////////////////////

module.exports = router; 