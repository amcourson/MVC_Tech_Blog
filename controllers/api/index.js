const router = require('express').Router();
const userRoutes = require('./userRoutes');
const BlogRoutes = require('./BlogRoutes');


//install handlebars, mysql2, sequelize, dotenv, expression-session, connect-session
router.use('/users', userRoutes);
router.use('/Blog', BlogRoutes);

module.exports = router;
