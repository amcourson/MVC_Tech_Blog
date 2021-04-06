const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');


//install handlebars, mysql2, sequelize, dotenv, expression-session, connect-session
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
